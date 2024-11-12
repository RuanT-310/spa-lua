async function rejectAfterSecods(){
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Request rejected after 0.8 seconds')), 800);
    });
}

rejectAfterSecods()
.catch((err) => console.log(err))