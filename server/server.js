import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';


const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  	res.send(500);
});

const port = 3000;

app.listen(port, () => {
  console.log(`server started on ${port} port`);
});

