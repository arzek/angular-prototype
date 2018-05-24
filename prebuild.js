require('dotenv').config();
const fs = require('fs');

var result = 
`export const environment = {
  production: true,
  project: '${process.env.PROJECT}'
};`
fs.writeFile('./src/environments/environment.prod.ts', result, 'utf8', function (err) {
  if (err) return console.log(err);
});

fs.unlink('./src/theme.sass', function() {});
fs.createReadStream(`./src/projects/${process.env.PROJECT}/theme.sass`).pipe(fs.createWriteStream('./src/theme.sass'));
