const { json } = require('express');
const express=require('express');
const app=express()
const https=require('https')

app.get('/',(req,res)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=London&appid=34c936d812147fd437e4caf56d318d97&units=metric'
    https.get(url,(response)=>{
        console.log(response.statusCode)
        response.on('data',(data)=>{
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp
            const weatherDEscription=weatherData.weather[0].description
            const icon=weatherData.weather[0]['icon']
            const url=`http://openweathermap.org/img/wn/${icon}@2x.png`
            res.write('<p>The weather is currently '+weatherDEscription+'</p>')
            res.write('<h1>The temperature in London is  '+ temp+' degrees Celcius</h1>')
            res.write("<img src="+url+">")
            res.send()
        })
    })
  
})






app.listen(3000,function(){
    console.log('server is running on port 3000.')
})