	
function primeNum(num){
	
	if (!isNaN(num)&&(num>1)) {
		var i=2;
		var division =  num;
		while (i<division) {
			division = num/i;
			if (division == Math.floor(division)) {
				return false;
			}
			i++;
		}
		return true;
	}
	else {
		console.log ("Введенные данные не подходят под условия");
		alert ("Введенные данные не подходят под условия");
		return false;}

	};
