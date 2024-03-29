import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: [ './tasks.component.css' ]
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

	constructor(private taskService: TaskService) {}

	ngOnInit() {
		this.taskService.getTasks().subscribe((tasks) => {
			this.tasks = tasks;
			console.log('test2', this.tasks);
		});
	}

	deleteTask(task: Task) {
		this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
	}
	addTask(task: Task) {
		this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
	}

	toggleReminder(task: Task) {
		task.reminder = !task.reminder;
		this.taskService.updateTaskReminder(task).subscribe();
	}
}
