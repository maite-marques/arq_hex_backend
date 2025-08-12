// carrega as variáveis de ambiente antes de iniciar a aplicação
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()
const porta = process.env.API_PORT ?? 4000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(porta, () => {
  console.log(` 🔥 Servidor executando na porta ${porta}!`)
})