const importBirthdayController = require('../controllers/importcsvController');

module.exports = (server) => {
    server.post('/importCSVBirthday', importBirthdayController.importCSVBirthday);
};
