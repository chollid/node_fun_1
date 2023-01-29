const fs = require('fs');


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'The answer to life is 42', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Do not go softly into the dying light.', () => {
//     console.log('file was written');
// });


// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         fs.writeFile('./assets/test_file.txt', 'Do not go softly into the dying light.', () => {
//         fs.readFile('./assets/test_file.txt', (err, data) => {
//             console.log('Asset folder text:', data.toString());
//         });
//     });
//     }) 
// } else {
//     fs.rmSync('./assets', { recursive: true, force: true });
// }


// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}