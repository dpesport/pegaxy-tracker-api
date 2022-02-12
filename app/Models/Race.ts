import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Pega from 'App/Models/Pega'


export default class Race extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pega_id: number

  @column()
  public race_id: number

  @column()
  public race_date: DateTime

  @column()
  public position: number

  @column()
  public reward: number

  @belongsTo(() => Pega,{
    foreignKey : 'pega_id',
  })
  public pega: BelongsTo<typeof Pega>
}
