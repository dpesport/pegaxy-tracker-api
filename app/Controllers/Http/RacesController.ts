import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class RacesController {
  private getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  public async getRaceSummaryByDate({ request, response }: HttpContextContract) {
    let pega_id = request.param('id')
    let today = new Date(Date.now())
    let start_date: string = request.qs().start_date
    let end_date: string = request.qs().end_date
    if (end_date == undefined) end_date = today.toISOString().split('T')[0]
    let total_days = this.getDifferenceInDays(new Date(end_date), new Date(start_date))
    let total_races = total_days * 24
    let races = await Database.rawQuery("SELECT count(*) as 'total_races',  sum(if(position<=3, 1,0)) as 'win', sum(if(position>3, 1, 0)) as 'lose', sum(if(position<=3, reward, 0)) as 'reward', avg(if(position<=3, 1, 0)) as 'win_rate', count(*)/:total_races as 'pega_usage' FROM races where race_date BETWEEN :start_date and :end_date and pega_id=:pega_id group by pega_id;", {
      start_date: start_date,
      end_date: end_date,
      pega_id: pega_id,
      total_races: total_races,
    })
    console.log(races)
    response.send(races[0][0])
  }
}
