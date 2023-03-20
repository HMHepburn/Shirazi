import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.css'],
	animations: [
		trigger('openClose', [
			state('open', style({
				backgroundColor: 'yellow'
			})),
			state('closed', style({
				backgroundColor: 'blue'
			})),
			transition('open => closed', [
				animate('1s')
			]),
			transition('closed => open', [
				animate('1s')
			])
		])
	]
})
export class AccordionComponent {
	items = [
		{name: 'Aux Merveilleux de Fred', text: 'Since 2003, Aux Merveilleux de Fred has grown and opened several stores throughout France. Alongside these openings on home soil, since 2009 Frédéric has been crossing new frontiers into prestigious cities around the world.', image:null}, 
		{name: 'Cacao70', text: 'A cup of hot chocolate brings back childhood memories. Whipped milk takes us back to a 1950s diner. A hint of sea salt transports us to a desert island (or better yet, a dessert island).', image:'https://radish.coop/assets/images/cacao-70/carousel/cacao-70-carousel-2.png'}, 
		{name: 'Poissonnerie Sherbrooke', text: 'At Sherbrooke Fish & Seafood, we have been striving to be your reliable source of fresh, quality fish and seafood for over 20 years. Our wide range of products, carefully selected for taste, texture and nutritional value, allows us to offer you the most delicious meals.', image:null}, 
		{name: 'Al-Amine', text: 'In the Côte-des-Neiges area, Al-Amine offers the best Lebanese dishes. With a traditional menu including shawarma, saj, manakish, falafel, tabouleh, and even a unique pizza menu, you are sure to find a dish to your liking.', image:null}, 
		{name: 'Maynard', text: 'Welcome to Maynard! Our urban version of a chip shack brings vegan alternatives of all the nostalgic comfort classics that you know and love, all while using high quality locally sourced seasonal ingredients prepared with love.', image:'https://radish.coop/assets/images/maynard/carousel/maynard-dish-2.jpeg'}
	];
	expandedIndex = 0;
}
