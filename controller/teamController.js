const team = require('../models/teamData');

const addTeam = async (req, res) => {
    const { full_name, email, team_name } = req.body;
    try {
        const response = await team.create({
            full_name,
            email,
            team_name,
        });
        console.log(response);
        res.send({ message: 'Team Added', response });
    } catch (err) {
        console.log(err);
        res.send({ message: 'Team Not Added', err });
    }
};

const getTeam = async (req, res) => {
    try {
        const response = await team.find();
        res.send({ message: 'Team Received', response });
    } catch (error) {
        console.log(error);
        res.send({ message: 'Team Error', error });
    }
};

module.exports = {
    addTeam,
    getTeam,
};
