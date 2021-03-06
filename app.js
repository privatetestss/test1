"use strict";
// import * as config from './_config/config.js'
const config = require('./_config/config.js');
const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');

// external requests
const request = require('request-promise');
const url = require('url');
const querystring = require('querystring');
const http = require('http');

// jsdom
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.set('trust proxy', true);
app.use('/pdf', express.static(__dirname + '/static/media/CV 2020 Tabuti nac.pdf'));
app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER STARTED PORT: 3000");
});

// ALL API REQUESTS GO HERE, DO NOT MAKE views/pages/api/
// app.get('/api/*', function(req, res) {
//
//     res.send("APIIIII!!\n");
// });

// Request that does not match api/ folder,
// Attempts to grab the html from views/pages/
app.get(/^(?!\/api\/)/, (req, res) => {
    let purl = url.parse(req.url, true);
    let pathname = 'pages' + purl.pathname;

    if ((pathname)[pathname.length - 1] === '/') {
        pathname += 'index';
    }
    res.render(pathname, purl.query);
});











