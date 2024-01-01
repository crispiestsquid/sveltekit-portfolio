import { MongoClient } from 'mongodb';

const MONGO_URL = '';
const DB_NAME = '';

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
