
function separatArrays(sourceArray){
	var arrayA = [];
	var arrayB = [];
	
	for (var i=0; i<sourceArray.length; i++){
		if (sourceArray[i]>0){
			arrayA.push(sourceArray[i]);
		} 
		else {
			if (sourceArray[i]<0){
				arrayB.push(sourceArray[i]);
			}
		}
	}
	console.log(arrayA);
	console.log(arrayB);
	console.log (sourceArray.length - arrayA.length - arrayB.length);
	
	alert ("Числа больше 0:" + arrayA);
	alert ("Числа меньше нуля 0:" + arrayB);
	alert ("Количество исключенных нулей: " + (sourceArray.length - arrayA.length - arrayB.length));
	return;
}







function countInArray(sourceArray){
	var resultArray = sourceArray.sort();
	var repArray = [];
	var repCount = 1;
	
//	var valueCount = {
//		value: '',
//		count: 0
//	}
		
	if (resultArray.length!=0){
		for (var i=1; i<resultArray.length; i++){
			if (resultArray[i]!=resultArray[i-1]) {
				
				var valueCount = {
					value: '',
					count: 0
				}
				
				valueCount.value = resultArray[i-1];
				valueCount.count = repCount;
				repArray.push(valueCount);
				repCount=0;
			}
			++repCount;
		}
	}
	
	console.log(repArray);
	
	return;
}