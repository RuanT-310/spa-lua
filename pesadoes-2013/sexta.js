const { getQuestion } = require("./dois");

async function firstPromisse() {
    return Promise.race([getQuestion(),
        () => getQuestion(2),
        () => getQuestion(1)]);
}

firstPromisse()
.then((res) => console.log(res))
.catch((err) => console.log(err))
