class Machine {
	constructor(power) {
		this._power = power;
		this._enabled = false;
	}

  enable() {
    this._enabled = true;
  }

  disable() {
    this._enabled = false;
  }
}


class FridgeMachine extends Machine {
	constructor(power) {
		super(power);
		this._food = [];
	}

	addFood(...foods) {
		const countBreak = Math.floor(this._power / 100);
		if (countBreak > 0) {
			let i = 0;
			while ((i < foods.length) && (i < countBreak)) {
				this._food.push(foods[i]);
				i++;
			}
			if (countBreak > foods.length) {
				return {
					code: 200,
					description: "Transaction succeed, холодильник наполнен"
				};
			}
			else {
				return {
					code: 404,
					description: "Fridge space not found, в холодильник все не вместилось"
				};
			}
		}
		else
			return {
				code: 500,
				description: "Internal fridge error, электричества не хватает"
			};
	}

	getFood() {
		return this._food;
	}
}

