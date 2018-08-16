const http = require('http');
const app = require('./src/app');

const port = parseInt(process.env.PORT, 10) || 30000;

app.set('port', port);

http.createServer(app);
app.listen(port, () => {
  console.log(`Puppify API started up at port ${port}`);
});
