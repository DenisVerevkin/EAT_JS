function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function FridgeMachine (power) {
	Machine.apply(this, arguments);

	this._food = [];
	var error = {};
	
	this.addFood = function() {
		countBreak=Math.floor(this._power/100);
		if (countBreak>0){
			var i=0;
			
			while ((i<arguments.length)&&(i<countBreak)) {
				 this._food.push(arguments[i]);
				 i++;
			 }
			 if (countBreak>arguments.length) {
				return error = {code: 200,
								description: "Transaction succeed, холодильник наполнен"};
			}
			else {
				return error = {code: 404,
								description: "Fridge space not found, в холодильник все не вместилось"};
			}
		}
		else return error = {code: 500,
							 description: "Internal fridge error, электричества не хватает"};
	}
	
	this.getFood = function() {
		return this._food;
	}
	

	
}

