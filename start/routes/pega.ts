import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
  Route.resource("pega", 'PegasController').only(['index', 'show'])
})