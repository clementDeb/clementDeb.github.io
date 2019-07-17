'use strict';
import TaskState from './TaskState';

function Task (listId, description){
    this.listId = boardId;
    this.description = description;
    this.state = TaskState.TODO;
}

module.exports = Task;