import { BaseTask } from 'adonis5-scheduler/build'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import Pega from 'App/Models/Pega'
import Logger from '@ioc:Adonis/Core/Logger'

export default class PegaTask extends BaseTask {

  private APOLLO_URL = Env.get('APOLLO_GAME_API_URL')

	public static get schedule() {
		return '*/5 * * * *'
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
          const api_result = await (await axios.get(`${this.APOLLO_URL}/pega/${pega.pega_id}`)).data
          await Pega.updateOrCreate({pega_id: pega.pega_id}, {
            pega_name: api_result.pega.name,
            energy: api_result.pega.energy,
            speed: api_result.pega.speed,
            strength: api_result.pega.strength,
            wind: api_result.pega.wind,
            water: api_result.pega.water,
            fire: api_result.pega.fire,
            lightning: api_result.pega.lightning,
            overall_total_race: api_result.pega.total_races,
            overall_win: api_result.pega.win,
            overall_lose: api_result.pega.lose,
            overall_winrate: api_result.pega.win/api_result.pega.total_races,
            owner_address: api_result.pega.owner.address,
            avatar: api_result.pega.design.avatar,
          })
        }
      catch (err) {
        Logger.error(err)
      }
      })
  	}
}
