import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { failResponseHandler, successResponseHandler } from 'App/Helpers/LogHelper';
import Todo from 'App/Models/Todo'

const CONTROLLER_NAME = 'TodosController';

export default class TodosController {
    public async list({ }: HttpContextContract) {
        try {
            const todos = await Todo.query();

            return successResponseHandler('Todos list', todos)
        } catch (e) {
            return failResponseHandler('Error in listing', `${CONTROLLER_NAME} listing error:`, e);
        }
    }
    public async create({ request }: HttpContextContract) {
        try {
            let todo = request.all();
            todo = await Todo.create({ title: todo.title, description: todo.description, status: todo.status })

            return successResponseHandler('Todo created', todo)
        } catch (e) {
            return failResponseHandler('Error in create', `${CONTROLLER_NAME} create error:`, e);
        }
    }
    public async show({ request }: HttpContextContract) {
        try {

            let id = request.param('id');
            const todo = await Todo.query().where({ id }).first();
            if (!todo) {
                return failResponseHandler(`todo with id: ${id} not found.`);
            }

            return successResponseHandler('Todo detail', todo)
        } catch (e) {
            return failResponseHandler('Error in show', `${CONTROLLER_NAME} show error:`, e);
        }
    }

    public async delete({ request }: HttpContextContract) {
        try {

            let id = request.param('id');

            const todo = await Todo.query().where({ id }).first();
            if (!todo) {
                return failResponseHandler(`todo with id: ${id} not found.`);
            }


            await Todo.query().where({ id }).delete();

            return successResponseHandler(`todo with id: ${id} deleted successfully.`)
        } catch (e) {
            return failResponseHandler('Error in delete', `${CONTROLLER_NAME} delete error:`, e);
        }
    }

    public async update({ request }: HttpContextContract) {
        try {

            let id = request.param('id');

            const payload = request.all();

            const todo = await Todo.query().where({ id }).first();


            if (!todo) {
                return failResponseHandler(`todo with id: ${id} not found.`);
            }


            const updatedTodo = await todo.merge({ title: payload.title, description: payload.description, status: payload.status }).save();

            return successResponseHandler(`todo with id: ${id} updated successfully.`, updatedTodo)
        } catch (e) {
            return failResponseHandler('Error in update', `${CONTROLLER_NAME} update error:`, e);
        }
    }
}
