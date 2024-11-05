const { writeJsonFile, readJsonFile } = require("./main")
prompt = require("prompt-sync")()


const newCustomer = { }
newCustomer["name"] = prompt("Nome: ")
newCustomer["age"] = parseInt(prompt("Idade: "))
newCustomer["city"] =prompt("Cidade: ")

writeJsonFile("customers.json", newCustomer)
console.log(readJsonFile("customers.json"))


