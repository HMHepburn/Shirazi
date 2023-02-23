import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-temp-component',
	templateUrl: './temp-component.component.html',
	styleUrls: ['./temp-component.component.css']
})
export class TempComponentComponent {
	constructor(
	private route: ActivatedRoute,
	) {}
}
