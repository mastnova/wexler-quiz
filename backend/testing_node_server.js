const server = require('express')();
const bodyParser = require('body-parser');
server.listen(3000);

server.get('/api/questions', (req, res) => {
  res.sendFile(`${__dirname}/questions.json`);
});

console.log('server listening localhost:3000');
