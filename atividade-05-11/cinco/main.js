const fs = require("fs")


const readJsonFile = (path) => {
    const data = fs.readFileSync(path, 'utf8', (error, data) => {
        //caso haja erro mostra no terminal
        if(error){
            console.log(error)
            return new Error(error.message)
        }
        //console.log(JSON.parse(data))
        //se está tudo ok... converte o json 
        return data  
    })
    return JSON.parse(data)
}
const writeJsonFile = (path, customer) => {
    const customers = readJsonFile(path)
    customers['customers'].push(customer)
    fs.writeFileSync(path, 
        JSON.stringify(customers), 
        (err, result) => console.log(result)        
    )
}
module.exports = {
    readJsonFile,
    writeJsonFile
}
