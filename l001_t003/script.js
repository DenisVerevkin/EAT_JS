	
function limCount(num){
	
	if (!isNaN(num)&&(num>1)) {
		var sumResult=1;
		var i;
		for (var i=2;i<=num;++i){
			sumResult=sumResult+ 1/i;
			}
		return sumResult;
		}
		
	else {
		console.log ("Введенные данные не подходят под условия");
		alert ("Введенные данные не подходят под условия");
		return false;}

	};
