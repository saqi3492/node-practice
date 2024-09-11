import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Todo extends BaseModel {
  public static primaryKey = 'id';

  @column()
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


  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
