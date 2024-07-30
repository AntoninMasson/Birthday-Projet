const db = require('../utils/createDB');

exports.insertQuote = (data, callback) => {
    const query = 'INSERT INTO quotes (quote, author) VALUES ?';
    const values = data.map(row => [row.quote, row.author]);
    db.query(query, [values], callback);
};