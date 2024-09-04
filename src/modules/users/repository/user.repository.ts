import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { ErrorService } from 'src/shared/error/error.service';
import { BaseRepository } from 'src/shared/base-reposiotry/base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly errorService: ErrorService,
  ) {
    super(userModel);
  }

  public async findByToken(token: string): Promise<UserDocument | null> {
    try {
      return await this.userModel.findOne({ token }).exec();
    } catch (error) {
      throw this.errorService.handleServerError('Failed to find user by token');
    }
  }
}
