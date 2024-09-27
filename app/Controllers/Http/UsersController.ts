import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { failResponseHandler, successResponseHandler } from 'App/Helpers/LogHelper';
import User from 'App/Models/User';

const CONTROLLER_NAME = 'UsersController'

export default class UsersController {
    public async get({ request }: HttpContextContract) {
        try {

            let id = request.param('id');
            const todo = await User.query().where({ id }).first();
            if (!todo) {
                return failResponseHandler(`todo with id: ${id} not found.`);
            }

            return successResponseHandler('Todo detail', todo)
        } catch (e) {
            return failResponseHandler('Error in show', `${CONTROLLER_NAME} show error:`, e);
        }
    }
}

export const getUserByEmail = async (email: string) => {
    if (!email) return null;
    try {
        return await User.query().where({ email }).first()
    } catch (e) {
        console.log(e);
        return null;
    }
}