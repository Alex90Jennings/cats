import { Module } from '@nestjs/common';
import { MongoModule } from 'nest-mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [MongoModule.forRoot(process.env.MONGO_DB_URI, 'Cats')],
})
export class CatsModule {}
