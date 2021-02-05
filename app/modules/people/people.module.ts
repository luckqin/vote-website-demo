import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './people.entity';
import { ProjectController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  controllers: [ProjectController],
  providers: [PeopleService],
})
export class PeopleModule {}
