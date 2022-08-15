import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { 

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>{
      this.tasks = tasks;
    })
  }

  deleteTask(task: Task){
   this.taskService.deleteTask(task).subscribe(() => {
    this.tasks = this.tasks.filter((t) => t.id !== task.id)
   })
  }

}
