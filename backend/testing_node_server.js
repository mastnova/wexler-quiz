'use strict';
const server = require('express')();
const bodyParser = require('body-parser');
const rightAnswers = require('./answers');
const results = require('./results');
server.listen(3000);

server.use(bodyParser.json({ strict: false }));

server.get('/api/questions', (req, res) => {
  res.sendFile(`${__dirname}/questions.json`);
});

server.post('/api/result', (req, res) => {
  const userAnswers = req.body.answers;
  const userResult = checkResult(userAnswers);
  res.send(userResult);
  res.end();
});

function checkResult(userAnswers) {
  let score = 0;
  let text = '';
  for (let i = 0; i < userAnswers.length; i++) {
    for (let j = 0; i < rightAnswers.length; j++) {
      if (userAnswers[i].questionId === rightAnswers[j].questionId) {
        if (userAnswers[i].answerId === rightAnswers[j].answerId) {
          score++;
        }
        break;
      }
    }
  }
  for (let i = 0; i < results.length; i++) {
    if (score >= results[i].min) {
      text = results[i].result;
      break;
    }
  }
  const percentile = score * 6.4; // magic of ancients
  return { score, percentile, text };
}

console.log('server listening localhost:3000');
