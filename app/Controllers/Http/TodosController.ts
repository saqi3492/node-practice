import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
    public async list({ request, params, response }: HttpContextContract) {
        try {
            const todos = await Todo.query();
            return response.json(todos);
        } catch (e) {
            console.log(e)
            return response.json('failed to get' + e.message)
        }
    }
    public async create({ request, params, response }: HttpContextContract) {
        try {
            let todo = request.all();
            todo = await Todo.create({ title: todo.title, description: todo.description, status: todo.status })

            return response.json(todo);
        } catch (e) {
            console.log(e)
            return response.json('failed to get' + e.message)
        }
    }
    public async show({ request, response }: HttpContextContract) {
        try {

            let id = request.param('id');
            const todo = await Todo.query().where({ id }).first();

            return response.json(todo);
        } catch (e) {
            console.log(e)
            return response.json('failed to get' + e.message)
        }
    }

    public async delete({ request, response }: HttpContextContract) {
        try {

            let id = request.param('id');

            const todo = await Todo.query().where({ id }).first();
            if (!todo) {
                return response.json(`todo with id: ${id} not found.`)
            }


            await Todo.query().where({ id }).delete();

            return response.json(`todo with id: ${id} deleted successfully.`)
        } catch (e) {
            console.log(e)
            return response.json('failed to get' + e.message)
        }
    }

    public async update({ request, response }: HttpContextContract) {
        try {

            let id = request.param('id');

            const payload = request.all();

            const todo = await Todo.query().where({ id }).first();


            if (!todo) {
                return response.json(`todo with id: ${id} not found.`)
            }


            const updatedTodo = await todo.merge({ title: payload.title, description: payload.description, status: payload.status }).save();

            return response.json(updatedTodo);
        } catch (e) {
            console.log(e)
            return response.json('failed to get' + e.message)
        }
    }
}
