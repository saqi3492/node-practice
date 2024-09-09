import { schema, rules } from '@ioc:Adonis/Core/Validator'

export class createValidator {
  public schema = schema.create({
    title: schema.string({}, [
      rules.minLength(3),
      rules.maxLength(30)
    ]),
    description: schema.string.optional(),
    status: schema.boolean(),
  })

  public messages = {
    'title.required': 'Title is required.',
    'title.string': 'Title must be a string.',
    'title.minLength': 'Title must be at least 3 characters long.',
    'title.maxLength': 'Title cannot be longer than 30 characters.',
    'description.string': 'Description must be a string.',
    'status.boolean': 'Status must be a boolean.'
  }
}

