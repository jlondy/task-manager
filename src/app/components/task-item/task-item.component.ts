import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: [ './task-item.component.css' ]
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;
	@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
	@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	onDelete(task) {
		this.onDeleteTask.emit(task);
	}
	onToggle(task) {
		this.onToggleReminder.emit(task);
	}
}
