import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pega extends BaseModel {
  @column({ isPrimary: true })
  public pega_id: number

  @column()
  public pega_name: string

  @column()
  public energy: number

  @column()
  public speed: number

  @column()
  public strength: number

  @column()
  public wind: number

  @column()
  public water: number

  @column()
  public fire: number

  @column()
  public lightning: number

  @column()
  public overall_total_race: number
  
  @column()
  public overall_win: number

  @column()
  public overall_lose: number

  @column()
  public overall_winrate: number

  @column()
  public owner_address: string

  @column()
  public avatar: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
