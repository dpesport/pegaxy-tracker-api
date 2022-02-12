import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scholars extends BaseSchema {
  protected tableName = 'scholars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('batch').notNullable()
      table.string('name').notNullable()
      table.string('discord_tag').notNullable()
      table.integer('pega_id').notNullable()
      table.string('wallet_address').notNullable()
      table.decimal('share', 3, 2).notNullable()
      table.timestamp('start_date', { useTz: true }).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
