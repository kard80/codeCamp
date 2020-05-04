const fs = require('fs');

// function rdFile(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (err, data) => {
//             resolve(data)
//         });
//     });
// }

// rdFile('start.txt')
//     .then(data => rdFile(data))
//     .then(data => rdFile(data))
//     .then(data => rdFile(data))
//     .catch(err => console.log(err))

async function rdFile(filename) {
    try {
        dt = await rdFile('start.txt');
        dt = await rdFile(dt);
    }catch (err) {
        console.log(err)
    }
}