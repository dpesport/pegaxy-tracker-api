import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pegases extends BaseSchema {
  protected tableName = 'pegas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('pega_id').primary()
      table.string('pega_name', 255).nullable()
      table.integer('energy').nullable()
      table.integer('speed').nullable()
      table.integer('strength').nullable()
      table.integer('wind').nullable()
      table.integer('water').nullable()
      table.integer('fire').nullable()
      table.integer('lightning').nullable()
      table.integer('overall_total_race').nullable()
      table.integer('overall_win').nullable()
      table.integer('overall_lose').nullable()
      table.decimal('overall_winrate', 3, 2).nullable()
      table.string('owner_address', 255).nullable()
      table.string('avatar', 255).nullable()

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
