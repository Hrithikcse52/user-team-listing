const mongoose = require('mongoose');

const teamDataSchema = mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String,
});

module.exports = mongoose.model('teamData', teamDataSchema);
