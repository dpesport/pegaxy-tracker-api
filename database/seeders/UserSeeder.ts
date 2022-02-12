import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        fullname: 'Admin User',
        email: Env.get('USER_EMAIL','admin@mail.com'),
        password: Env.get('USER_PASSWORD','admin123'),
        role_id: 1
      }
    ])
  }
}
