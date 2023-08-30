    
const fs = require('fs'); // Node.js module

// Hello, World!
    
    let hw = 'Hello, World!';

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello, World!</title>
        </head>
        <body>
        </body>
        </html>
    `;

    const fileName = 'js.html';
    fs.writeFileSync(fileName, htmlContent);

document.body.appendChild(createElement('p'));
document.querySelector('p').innerHTML = hw;