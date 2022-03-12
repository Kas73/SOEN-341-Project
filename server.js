const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/users.routes');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//Connect to DB
mongoose
	.connect(process.env.DB, { useNewUrlParser: true })
	.then(() => console.log('Database connected successfully'))
	.catch((err) => console.error(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());
app.use('/', productRoutes);
app.use('/', userRoutes);

app.use((err, req, res, next) => {
	console.log(err);
	next();
});

// app.use((req, res, next) => {
//     res.send('Welcome to Express');
// });

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
