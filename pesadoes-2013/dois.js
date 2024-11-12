function getQuestion(questionId='undefined') {
    const questions = ['Qual a melhor farm do minecra?', "Qual o melhor brawler?", "Lol e realmete ruim?"]

    return new Promise((resolve, reject) => {
        if (questionId === 'undefined') {
            resolve(questions)
        } else if (!!questions[questionId]) {
            resolve(questions[questionId])
        } else {
            reject(new Error(`Question with ID ${questionId} not found`))
        }
    })
} 

// esta comentado para não atrapalhar as outra funçoes
// codigo de teste funcional
/* getQuestion(2)
.then((question) => console.log(question))
.catch((error) => console.log(error)) */

module.exports = {
    getQuestion
}