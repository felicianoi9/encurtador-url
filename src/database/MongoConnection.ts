import mongoose from 'mongoose';
import { config } from '../config/Constants';

const app = mongoose;

export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await app.connect(config.MONGO_CONNECTION)
			console.log('Database connected')
		} catch (err) {
			console.error(err.message)
			process.exit(1)
		}
	}
}
