const { getQuestion } = require("./dois");
(async function () {
    for (let i = 0; i < 3;  i++) {
        i===3
        ? console.log(await getQuestion())
        : console.log(await getQuestion(i))
    }
})()