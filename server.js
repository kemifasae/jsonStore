var http = require('http');
var app =  require('./app/app');

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
});

module.exports = server;
