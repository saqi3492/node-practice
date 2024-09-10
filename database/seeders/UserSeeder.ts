import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User' // Ensure this path is correct based on your project structure

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        is_active: true
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
        is_active: true
      },
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'password123',
        is_active: false
      }
    ])
  }
}
