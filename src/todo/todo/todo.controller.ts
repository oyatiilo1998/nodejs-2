import { Controller, Body, Param, Get, Post, Delete } from '@nestjs/common';
import { TodoDTO } from '../todo.dto';
import { todos } from '../../../todo-mock';

let todosData = todos;

@Controller('todo')
export class TodoController {
  @Get()
  getTodos(): TodoDTO[] {
    return todosData;
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): TodoDTO {
    const newTodo: TodoDTO = {
      id: (todosData.length + 1).toString(),
      ...createTodo,
    };

    todosData = [...todosData, newTodo];

    return newTodo;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): TodoDTO {
    const todoToDelete = todosData.find((todo) => todo.id === id);
    todosData = todosData.filter((todo) => todo.id !== id);

    return todoToDelete;
  }
}
