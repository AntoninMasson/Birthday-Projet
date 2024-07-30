const importQuoteController = require('../controllers/importcsvController');

module.exports = (server) => {
    server.post('/importCSVBirthday', importQuoteController.importCSVQuote);
};
