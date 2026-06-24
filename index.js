import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import projectRoutes from './routes/projectRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/auth', authRoutes)

app.get('health', (req, res) => {
    res.json({
        status: 'ok',
        env: process.env.NODE_ENV,
        version: '1.0.0'
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        error:'Rota não encontrada',
        path: req.path,
        method: req.method
    })
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(env.statusCode || 500).json({
        error: env.message || 'Erro interno do servidor'
    })
})

const PORT = process.env.PORT || 3000
 app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`)
        console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`)
    })