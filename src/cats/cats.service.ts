import { Injectable } from '@nestjs/common';
import * as mongo from 'mongodb';
import { InjectDb } from 'nest-mongodb';
import { Cat } from './interfaces/cats';

@Injectable()
export class CatsService {
  private readonly collection: mongo.Collection;

  constructor(@InjectDb() private readonly db: mongo.Db) {
    this.collection = this.db.collection('cats');
  }

  //   async findAll(): Promise<Cat[]> {
  //     return await this.collection.findAll("cats")
  //   }

  async create(cat: Cat) {
    const result = await this.collection.insertOne(cat);

    console.log(result.insertedId);
    return result[0];
  }
}
