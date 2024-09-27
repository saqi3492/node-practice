import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { failResponseHandler, successResponseHandler } from 'App/Helpers/LogHelper'
import User from 'App/Models/User'
import { SingupValidator, loginValidator } from 'App/Validators/AuthValidator'
import { getUserByEmail } from './UsersController'

const CONTROLLR_NAME = 'AuthController'

export default class AuthController {
    public async signup({ request }: HttpContextContract) {
        try {
            let signUpData = await request.validate(SingupValidator)

            signUpData = await User.create(signUpData)

            return successResponseHandler('User created', signUpData)
        } catch (e) {
            return await failResponseHandler(
                `Failed to create user account. Please ensure all required fields are filled correctly and try again.`,
                `${CONTROLLR_NAME} signup error :`,
                e
            )
        }
    }

    public async login({ request, auth }: HttpContextContract) {
        try {
            const { email, password } = await request.validate(loginValidator);

            const res = await auth.attempt(email, password);
            // res.toJSON() can also be used if we are un-able to read from response
            const token = res.tokenHash;

            const user = await getUserByEmail(email);
            if (!user) {
                throw new Error('User not found.');
            }

            return successResponseHandler('User logged in successfully', { token, user })

        } catch (e) {
            return await failResponseHandler(
                `Failed to authenticate user. Please ensure your email and password are correct and try again.`,
                `${CONTROLLR_NAME} login error :`,
                e
            )
        }
    }
}