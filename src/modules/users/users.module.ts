import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserCommands } from './commands';
import { UserQueryCommands } from './queries';
import { HashModule } from 'src/shared/hash/hash.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { HashService } from 'src/shared/hash/hash.service';
import { UserRepository } from './repository/user.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { LoggerModule } from 'src/shared/logger/logger.module';

@Module({
  imports: [
    HashModule,
    CqrsModule,
    LoggerModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository, ...UserCommands, ...UserQueryCommands],
})
export class UsersModule {}
