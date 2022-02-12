import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pega from 'App/Models/Pega'

export default class PegasController {
  public async index({response}: HttpContextContract) {
    const pegas = await Pega.all()
    return response.send(pegas)
  }

  public async show({request, response}: HttpContextContract) {
    const pegas = await Pega.findBy("pega_id", request.param('id'))
    return response.send(pegas)
  }
}
