// const { MongoClient } = require('mongodb');

// async function createProduct(newProduct) {
// 	const uri =
// 		'mongodb+srv://ankitaingle:7CB0wPLCaUKlgm3F@cluster0.jofff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// 	const client = new MongoClient(uri);

// 	try {
// 		await client.connect(); // Connect to the MongoDB cluster

// 		const result = await client
// 			.db('testDB')
// 			.collection('products')
// 			.insertOne(newProduct);
// 		console.log(
// 			`New product created with the following id: ${result.insertedId}`
// 		);
// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		await client.close();
// 	}
// }

// //main().catch(console.error);

// // async function listDatabases(client) {
// // 	databasesList = await client.db().admin().listDatabases();

// // 	console.log('Databases:');
// // 	databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// // }

// export { createProduct };
// //exports.getProducts = getProducts;
// // await listDatabases(client);
