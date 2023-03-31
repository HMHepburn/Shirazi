import { Component } from '@angular/core';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
	savingGood: boolean = false;
	savingBad: boolean = false;

	goodButtonPress() {
		this.savingGood = true;
	}

	badButtonPress() {
		this.savingBad = true;
	}
}