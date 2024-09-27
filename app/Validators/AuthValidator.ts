import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class SingupValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        name: schema.string({ trim: true }, [rules.maxLength(255)]),
        email: schema.string([
            rules.email(),
            rules.unique({ table: 'users', column: 'email' }),
        ]),
        password: schema.string([rules.minLength(4), rules.confirmed()]),
    })

    public messages: CustomMessages = {
        'name.required': 'Name is required.',
        'name.maxLength': 'Name must have maximum Of 225 characters.',
        'email.required': 'Email is required.',
        'email.email': 'Invalid email format.',
        'email.unique': 'Your email is already registered with our system.',
        'password.string': 'Invalid password.',
        'password.required': 'Password is required.',
        'password.minLength': 'Password must have minimum of four characters',
        'password.confirmed': 'Passwords must be same',
    }
}

export class loginValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        email: schema.string([rules.email()]),
        password: schema.string(),
    })

    public messages: CustomMessages = {
        'email.required': 'Email is required.',
        'password.required': 'Password is required.',
    }
}
