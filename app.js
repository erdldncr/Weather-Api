const express=require('express');
const app=express()
const https=require('https')

app.get('/',(req,res)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=London&appid=34c936d812147fd437e4caf56d318d97&units=metric'
    https.get(url,(response)=>{
        console.log(response.statusCode)
        response.on('data',(data)=>{
            const weather=JSON.parse(data)
            console.log(weather)
        })
    })
    res.send('server is up and running')
})






app.listen(3000,function(){
    console.log('server is running on port 3000.')
})