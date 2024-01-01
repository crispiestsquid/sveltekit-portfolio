import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'my-svelte-site';

let db = null;

async function connectToDatabase() {
	if (db) {
		return db;
	}

	const client = new MongoClient(MONGO_URL);

	await client.connect();
	db = client.db(DB_NAME);
	return db;
}

async function getCollection(collectionName) {
	const database = await connectToDatabase();
	return database.collection(collectionName);
}

export { connectToDatabase, getCollection };
