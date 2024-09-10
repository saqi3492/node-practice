import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column({
    serialize: (value?: Number) => Boolean(value),
  })
  public status: boolean

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasOne(() => User)
  public user: HasOne<typeof User>
}
