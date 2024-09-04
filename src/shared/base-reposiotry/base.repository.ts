import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  async create(createDto: any): Promise<T> {
    const createdEntity = new this.model(createDto);
    return await createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async findOne(query: any): Promise<T | null> {
    return await this.model.findOne(query).exec();
  }

  async update(id: string, updateDto: any): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async save(entity: T): Promise<T> {
    return await entity.save();
  }
}
