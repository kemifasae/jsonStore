let jsonController = require('./controllers/jsonController')

const Route = (app) => {

    app.post('/docs', jsonController.createNewData);

    app.get('/docs/:id', jsonController.getData);

    app.put('/docs/:id', jsonController.updateData);

    app.delete('/docs/:id', jsonController.deleteData);
}

module.exports = Route;
