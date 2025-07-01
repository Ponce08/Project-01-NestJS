import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{
    getTasks(){
        return ['Yonathan', 'Julieta', 'Santiago']
    }

    postTask(){
        return 'Creando tarea'
    }
}