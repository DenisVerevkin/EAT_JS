	
function numReverse(num){
	
	if (!isNaN(num)&&(num>=10)&&(num<=1000000)) {
		var strNum=num.toString(10);
		var reversedNum='';
		var i,j;
		//var k=strNum.length;
		for (i=strNum.length;i>0;i--){
			reversedNum = reversedNum+strNum[i-1];
			}
		return Number(reversedNum);
		}
		
	else {
		console.log ("Введенные данные не подходят под условия");
		alert ("Введенные данные не подходят под условия");
		return false;}

	};
