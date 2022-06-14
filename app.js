import express from "express";
const app = express();
import compression from "compression";
import * as prismicH from "@prismicio/helpers";
import { client } from './config/prismicConfig.js';
import ejs from "ejs";
import path from "path";
const port = 1855;

app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

app.use(express.static(path.resolve('public')));
app.use(compression());

app.use((req, res, next) => {
    res.locals.ctx = {
        prismicH,
    }
    next()
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/story', async (req, res) => {
    let stories = await client.getAllByType('info')

    console.log(stories)

    stories = stories.map(story => {
        return {
            "uid": story.uid,
            "title": story.data.title[0].text,
            "text": story.data.text
        }
    })

    stories = stories.sort((a, b) => a.uid - b.uid)

    res.render('story', { stories })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})