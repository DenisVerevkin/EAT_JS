	
function sqrtRoots(a, b, c){
	
	if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)) {
		if (a!=0){
			var aDisplay = a.toString(10) + 'x^2';
			}
		else {
			console.log("Уравнение вырождено");
			alert("Уравнение вырождено");
			return;}
		
		if (b > 0) {
			var bDisplay = '+'+ b.toString(10) + 'x';}
		else {
			if (b < 0) {
			var bDisplay = b.toString(10) + 'x';}
			else {
			var bDisplay = '';} 
		}
		if (c > 0) {
			var cDisplay = '+'+ c.toString(10);}
		else {
			if (c < 0) {
			var cDisplay = c.toString(10);}
			else {
			var cDisplay = '';} 
		}
		
		console.log("Квадратное уравнение вида: "+ aDisplay + bDisplay + cDisplay);
		alert ("Квадратное уравнение вида: "+ aDisplay + bDisplay + cDisplay);
				
		var discriminant = b*b-4*a*c;
		
		if (discriminant<0) {
			console.log("Уравнение не имеет корней");
			alert("Уравнение не имеет корней");
			return;}
		else {
			if (discriminant==0) { 
				var x1 = (-b/(2*a));
				console.log("Уравнение имеет один корень, x = "+ x1);
				alert("Уравнение имеет один корень, x = "+ x1);
				return;}
			else{
				var x1 = ((-b + Math.sqrt(discriminant))/(2*a));
				var x2 = ((-b - Math.sqrt(discriminant))/(2*a));
				console.log("Уравнение имеет два корня, x1 = " + x1 + ", x2 = " + x2);
				alert("Уравнение имеет два корня, x1 = " + x1 + ", x2 = " + x2);
				return;}
			}
	}
	else {
		console.log("Все коэффициенты должны быть числами");
		alert ("Все коэффициенты должны быть числами");
		return;}

	};
