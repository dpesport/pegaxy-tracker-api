import { BaseTask } from 'adonis5-scheduler/build'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import Race from 'App/Models/Race'
import Pega from 'App/Models/Pega'
import Logger from '@ioc:Adonis/Core/Logger'

export default class RaceTask extends BaseTask {

  private APOLLO_URL = Env.get('APOLLO_GAME_API_URL')

	public static get schedule() {
		return '*/30 * * * *'
	}
	/**
	 * Set enable use .lock file for block run retry task
	 * Lock file save to `build/tmpTaskLock`
	 */
	public static get useLock() {
		return false
	}

	public async handle() {
    	const pegas = await Pega.all()
      pegas.map(async (pega) => {
        try {
          const api_result = await (await axios.get(`${this.APOLLO_URL}/race/history/pega/${pega!.pega_id}`)).data
          api_result.data.map(async (race) => {
            let race_schedule = new Date(race.race.schedule * 1000)
            try {
              await Race.create({
                race_date: race_schedule,
                pega_id: pega!.pega_id,
                race_id: race.id,
                position: race.position,
                reward: race.reward,
              })
            } catch (error) {
            }
          })
        }
        catch (err) {
          Logger.error(err)
        }
      })
      Logger.info("Syncronizing Data Success")
  	}
}
