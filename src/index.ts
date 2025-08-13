// carrega as variáveis de ambiente antes de iniciar a aplicação
// main component, passa os casos de uso para os controladores
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg'
import SenhaCripto from './external/auth/SenhaCritpo'
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController'

const app = express()
const porta = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
  console.log(` 🔥 Servidor executando na porta ${porta}!`)
})

// -------------- Rotas Abertas - sem auth do usuario --------------- //

// Registrar Usuário
const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto)

new RegistrarUsuarioController(app, registrarUsuario)
