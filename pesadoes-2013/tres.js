const { getQuestion } = require("./dois");

Promise.all([getQuestion(1), getQuestion(0), getQuestion(2)])
.then((response) => console.log(response))
.catch((error) => console.log(error))