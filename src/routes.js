const express = require('express');
const routes = express.Router();
const productcontroller = require('./controllers/productcontroller');
routes.get('/products', productcontroller.index); 
routes.get('/products/:id', productcontroller.show);
routes.post('/products', productcontroller.store);
routes.put('/products/:id', productcontroller.update);
routes.delete('/products/:id', productcontroller.destroy);
module.exports = routes;