const express = require('express');

const app = express();

const firstCharacters = require('/lib.strings.js');

app.get('/strings/hello/:helloStringParam', (request, response) => {
  const { helloStringParam } = request.params;
  return response.json({ result: `Hello, ${helloStringParam}!` });
});

app.get('/strings/upper/:upperCaseParam', (request, response) => {
  const { upperCaseParam } = request.params;
  return response.json({ result: `${upperCaseParam.toUpperCase()}` });
});

app.get('/strings/lower/:lowerCaseParam', (request, response) => {
  const { lowerCaseParam } = request.params;
  return response.json({ result: `${lowerCaseParam.toLowerCase()}` });
});

app.get('/strings/first-characters/:firstCharactersParam', (request, response) => {
  const { firstCharactersParam } = request.params;
  return response.json({ result: `${firstCharactersParam.charAt(0)}` });
});

app.get('/strings/first-characters/:string', (request, response) => {
  response.json({ result: firstCharacters(request.params.string, request.query.length) });
});

// app.get('/strings/first-characters/:firstCharactersParam', (request, response) => {
//   const { firstCharactersParam } = (request.params.string, request.query.length);
//   return response.json({ result: `${firstCharactersParam}` });
// });

module.exports = app;
