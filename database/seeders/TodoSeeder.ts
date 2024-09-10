import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Todo from 'App/Models/Todo'

export default class extends BaseSeeder {
  public async run() {
    await Todo.createMany([
      {
        title: 'Buy groceries',
        description: 'Milk, Bread, Butter',
        status: true,
        userId: 1,
      },
      {
        title: 'Read a book',
        description: 'Finish reading React documentation',
        status: true,
        userId: 2,
      },
      {
        title: 'Workout',
        description: 'Run 5km',
        status: false,
        userId: 1,
      },
      {
        title: 'Clean the house',
        description: 'Vacuum and dust the living room',
        status: false,
        userId: 2,
      },
      {
        title: 'Complete assignment',
        description: 'Finish the math assignment',
        status: true,
        userId: 3,
      },
      {
        title: 'Plan weekend trip',
        description: 'Check available destinations and accommodation',
        status: false,
        userId: 1,
      },
      {
        title: 'Attend meeting',
        description: 'Team meeting at 10 AM',
        status: true,
        userId: 2,
      },
      {
        title: 'Pay bills',
        description: 'Pay electricity and water bills',
        status: false,
        userId: 3,
      }
    ])
  }
}
