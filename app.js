var express = require('express');
var apiMocker = require('connect-api-mocker');
 
var app = express();
var restMock = apiMocker('/api', 'mocks/api');
 
app.use(restMock);
app.listen(8080);