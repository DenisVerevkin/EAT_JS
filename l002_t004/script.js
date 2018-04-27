	
function anagrammCompare(stringA, stringB){
	
	if (stringA.length!=stringB.length) {return false;}
		
	else {
		var arrA = stringA.split('').sort();
		var arrB = stringB.split('').sort();
		
		var stringA = arrA.join('');
		var stringB = arrB.join('');
		
		if (stringA==stringB) {return true;}
		else return false;
		}

	};
