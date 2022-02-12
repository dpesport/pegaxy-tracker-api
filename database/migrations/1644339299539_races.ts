import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Races extends BaseSchema {
  protected tableName = 'races'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pega_id').notNullable()
      table.integer('race_id').notNullable()
      table.timestamp('race_date', {useTz: true}).notNullable()
      table.integer('position').notNullable()
      table.integer('reward').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
