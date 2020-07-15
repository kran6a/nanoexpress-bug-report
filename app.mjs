import nanoexpress from 'nanoexpress-pro';
const app = nanoexpress();

app.patch('/', {}, (req, res) => {
    console.log(req.body);
    return res.end();
});
app.listen(3030, "127.0.0.1");