const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {

'purple acko': {
    'age':28,
    'birthName': 'George Atkinson',
    'birthLocation': 'Brunei, Darussalam'
},
'21 savage': {
    'age':28,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
'dave':{
    'age':23,
    'birthName': 'David Orobosa Omoregie',
    'birthLocation': 'London,England'
},
'unknown':{
    'age': 0,
    'birthName': 'unknown',
    'birthLocation':'unknown'
    
}
}


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})


// the : lets us know it's a query paramater 

app.get('/rappers/:rapperName',(request,response)=>{
    const rapName = request.params.rapperName.toLocaleLowerCase()
    if(rappers[rapName]){
    response.json(rappers[rapName])
    }
    else {
        response.json(rappers['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})