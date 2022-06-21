import express from "express";
const app = express();
import compression from "compression";
import * as prismicH from "@prismicio/helpers";
import ejs from "ejs";
import path from "path";
import { router } from './router/router.js';
const port = 1855;

app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

app.use(express.static(path.resolve('public')));
app.use(compression());

app.use((req, res, next) => {
    res.locals.ctx = {
        prismicH,
    }
    next();
});

app.use(router)
 
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});