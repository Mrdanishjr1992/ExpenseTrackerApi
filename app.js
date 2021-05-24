require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Cross Origin Resource Sharing
app.use(cors());

// Home Route
app.get('/', (req, res) => {
	res.send('<h1>ExpenseTracker-Api</h1>');
});
// Budget Route
app.use('/budget', routes.budget);
// User Route
app.use('/user', routes.user);

app.listen(PORT, () => console.log('connected to port ' + PORT));
