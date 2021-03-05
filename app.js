const { json, query } = require('express');
const express=require('express');
const app=express()
const https=require('https')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
  
})
app.post('/',function(req,res){
    console.log(req.body.cityName);

})

// const query="London"
//     const apiKey='34c936d812147fd437e4caf56d318d97'
//     const unit='metric'
//     const url='https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey+'&units='+unit
//     https.get(url,(response)=>{
//         console.log(response.statusCode)
//         response.on('data',(data)=>{
//             const weatherData=JSON.parse(data)
//             const temp=weatherData.main.temp
//             const weatherDEscription=weatherData.weather[0].description
//             const icon=weatherData.weather[0]['icon']
//             const url=`http://openweathermap.org/img/wn/${icon}@2x.png`
//             res.write('<p>The weather is currently '+weatherDEscription+'</p>')
//             res.write('<h1>The temperature in London is  '+ temp+' degrees Celcius</h1>')
//             res.write("<img src="+url+">")
//             res.send()
//         })
//     })




app.listen(3000,function(){
    console.log('server is running on port 3000.')
})