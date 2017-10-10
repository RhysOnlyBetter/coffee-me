
const MENU = [
	{id: 1, name: 'Drip Coffee', price: 3.50, 
	image:'https://i.imgur.com/iBhEjWi.jpg',
	options:[
		{id: 1, name: 'Milk', price: 0.00, quantity: 0},
		{id: 2, name: 'Sugar', price: 0.00, quantity: 0}
		]},
	{id: 2, name: 'Espresso', price: 4.50, 
	image: 'https://i.imgur.com/6xzdad3.jpg',
	options:[
		{id: 1, name: 'Milk', price: 0.00, quantity: 0},
		{id: 2, name: 'Sugar', price: 0.00, quantity: 0}, 
		{id: 3, name: 'Whipped Cream', price: 1.00, quantity: 0},
		{id: 4, name: 'Chocolate Syrup', price: 1.00, quantity: 0}
	]},
	{id: 3, name: 'Berry Smoothie', price: 5.00, 
	image:'https://i.imgur.com/zB2odm4.jpg',
	options:[
		{id: 1, name: 'Extra Berries', price: 1.00, quantity: 0}
	]},
	{id: 4, name: 'Strawberry Smoothie', price: 5.00, 
	image: 'https://i.imgur.com/zEpOQqg.jpg',
	options:[
		{id: 1, name: 'Extra Strawberry', price: 1.00, quantity: 0}
	]}
];

export function getItems() {
	return new Promise((resolve) => {
		setTimeout(resolve(JSON.stringify(MENU)), 200);
	});

}

export function sendOrder(order) {
	console.log(JSON.stringify(order));
}