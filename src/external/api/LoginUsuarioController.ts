import LoginUsuario from '@/core/usuario/service/LoginUsuario';
import { Express } from 'express'

export default class LoginUsuarioController {
  constructor(servidor: Express, casoDeUso: LoginUsuario){
    servidor.post('/api/usuarios/login', async(req, res) => {
      try {
        const resposta = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha
        })
        res.status(200).send(resposta)
      } catch(erro: any) {
        res.status(400).send(erro.message)
      }
    })
  }

}