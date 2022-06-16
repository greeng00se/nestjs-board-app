import { Controller, Get, Param } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get('/:id')
    getBoardById(@Param() id:number) : Promise<Board> {
        return this.boardService.getBoardById(id);
    }
}
