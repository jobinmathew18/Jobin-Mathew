import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'  
import './dbConn.js'
import info from './routes/info.js'
import company from './routes/company.js'

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api/info', info)
app.use('/api/company', company)

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`)  
})  