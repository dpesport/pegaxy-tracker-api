import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
  Route.get("/:id", 'RacesController.getRaceSummaryByDate')
}).prefix('race')