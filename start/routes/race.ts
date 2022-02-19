import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
  Route.get("/:id", 'RacesController.getRaceSummaryByDate'),
  Route.post("/pega_overview", "RacesController.getRaceSummaryByPegaIds")
}).prefix('race')