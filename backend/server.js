//const express = require('express')
//const products=require('./data/products')
//const dotenv = require('dotenv')

// upper wali lines ka same tareeqa ye neechay hai bas neechay ES new tarreqa hai jis main 
//frontend or bacnkend files same tareeqy se import hoti hai upper wala purana tareeqa hai
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
dotenv.config() 
const app=express()

connectDb()

app.get('/',(req,res) =>{
    res.send("API RUNNING")
})

app.use('/api/product',productRoutes)
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`running in ${process.env.NODE_ENV} on ${PORT}`))

