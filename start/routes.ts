/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//######### Auth Routes ######### 
Route.group(() => {
  Route.post('/signup', 'AuthController.signup')
  Route.post('/login', 'AuthController.login')
})
  .middleware([])
  .prefix('/api')

//######### Todo Routes ######### 
Route.group(() => {
  Route.get('/', 'TodosController.list')
  Route.post('/', 'TodosController.create')
  Route.get('/:id', 'TodosController.get')
  Route.delete('/:id', 'TodosController.delete')
  Route.put('/:id', 'TodosController.update')

})
  .middleware(['auth'])
  .prefix('/api/todos')


// //######### User Routes ######### 
// Route.group(() => {
//   Route.get('/', 'UsersController.list')
//   Route.post('/', 'UsersController.create')
//   Route.get('/:id', 'UsersController.get')
//   Route.delete('/:id', 'UsersController.delete')
//   Route.put('/:id', 'UsersController.update')

// })
//   .middleware(['auth'])
//   .prefix('/api/users')

