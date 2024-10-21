import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { Itask } from '../../interface/itask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  faListCheck = faListCheck;
  faCheck = faCheck;
  faXmark = faXmark;
  newtask = '';
  tasks: Itask[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.tasks = this.taskService.getItem('tasks');
    console.log(this.tasks);
  }
  AddTask(): void {
    const task: Itask = { title: this.newtask, completed: false };
    this.tasks.push(task);
    this.taskService.setItem('tasks', this.tasks);
    this.newtask = '';
  }
  markCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.taskService.setItem('tasks', this.tasks);
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.taskService.setItem('tasks', this.tasks);
  }
}
