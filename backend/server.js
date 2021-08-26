const host = "127.0.0.1"
const port = 8081;
const app = require('./index');

app.listen(port, host, (err) => {
    if (err) {
        console.log('Unable to listen for connections: ', error);
        process.exit(10);
    }
    console.log(`Server started on http://${host}:${port}`);
})