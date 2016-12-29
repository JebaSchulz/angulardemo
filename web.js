/**
 * Created by leswilson on 29/12/2016.
 */
'use strict';

var express = require('express');
var gzippo = require('gzippo');

var app = express();

app.use(gzippo.staticGzip('dist'));
app.listen(process.env.PORT || 5000);

