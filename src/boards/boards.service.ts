import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = ['name'];

    getAllBoards() {
        return this.boards;
    }
}
