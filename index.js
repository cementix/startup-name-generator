import generator from '@rstacruz/startup-name-generator';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/submit', (req, res) => {
    const startupName = generator(req.body["word"]);

    if (startupName && startupName.length > 0) {
        res.render('index.ejs', {
            processedName: startupName[Math.floor(Math.random() * startupName.length)]
        });
    } else {
        res.render('index.ejs', {
            processedName: "No name generated"
        });
    }
});





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});