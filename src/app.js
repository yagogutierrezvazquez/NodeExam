console.log("hola");

import  express  from 'express';
import ejs from 'ejs';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/routes.js'
import { PORT } from './config.js';

const app = express();

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));


app.listen(PORT);
console.log('escuchando en el puerto', PORT);