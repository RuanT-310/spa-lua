function promessa(bool) {
    return new Promise(
        (resolve, reject) => (
            bool
        ) ? resolve('Success')
        : reject('Failure')
    )  
}

promessa(true)
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('It`s over'))