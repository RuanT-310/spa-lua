const { getQuestion } = require("./dois");


(async function (){
    try {
        const question = await getQuestion();
        console.log(question);
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Program execution completed.");
    }
})()