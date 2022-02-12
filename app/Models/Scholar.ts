import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Pega from 'App/Models/Pega'

export default class Scholar extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public batch: number

  @column()
  public name: string

  @column()
  public discord_tag: string

  @column()
  public pega_id: number

  @column()
  public wallet_address: string

  @column()
  public share: number

  @column()
  public start_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Pega,{
    foreignKey : 'pega_id',
  })
  public pega: BelongsTo<typeof Pega>
}
