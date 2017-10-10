export default function Item(id, name, price, options = []){
	this.id = id;
	this.name = name;
	this.price = price;
	this.options = options;

	this.addOption = function(opt){
		for(var i in this.options){
        if(opt.id == this.options[i].id && this.options[i].quantity < 11){
          this.options[i].quantity++;
          this.price += this.options[i].price;
        }
      }
	};
	this.removeOption = function(opt){
		for(var i in this.options){
        if(opt.id == this.options[i].id && this.options[i].quantity > 0){
          this.options[i].quantity--;
          this.price -= this.options[i].price;
        }
      }
	};
}