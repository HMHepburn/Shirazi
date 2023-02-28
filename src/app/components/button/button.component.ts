import { Component } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {
	button1: Boolean = true;
	button2: Boolean = false;
	button3: Boolean = false;

	setButtonOne() {
		this.button1 = true;
		this.button2 = false;
		this.button3 = false;
	}

	setButtonTwo() {
		this.button1 = false;
		this.button2 = true;
		this.button3 = false;
	}

	setButtonThree() {
		this.button1 = false;
		this.button2 = false;
		this.button3 = true;
	}
}
