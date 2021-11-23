const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const teamRoute = require('./routes/teamRoutes');
const port = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then((_) => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log('error on connecting', err);
    });

app.use(express.static('client/build'));
app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/team', teamRoute);

// app.get('/', (req, res) => {
//     res.send({ message: 'server is up and running' });
// });
app.listen(port, () => {
    console.log('Server Listening on port', port);
});
