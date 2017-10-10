export default function Cart(items = [], price = 0){
	this.items = items;
	this.price = price;

	this.addItem = function(item){
		this.items.push(item);
		this.price += item.price;
	}
	this.deleteItem = function(item){
		var index = this.items.indexOf(item);
		if (index > -1) {
    		this.items.splice(index, 1);
    	}
    	this.price -= item.price;
	};
}