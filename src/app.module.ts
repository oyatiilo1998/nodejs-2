import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo/todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [],
})
export class AppModule {}
