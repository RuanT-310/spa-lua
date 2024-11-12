const fs = require('fs');
async function otherFsDotReaddir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    }) 
}

(async function() {
    otherFsDotReaddir('exemplodepasta')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
})()