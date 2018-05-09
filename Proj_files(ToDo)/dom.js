function addTodoItemDom(todoItem) {
	var li = document.createElement	('li');
	li.setAttribute('id', `${todoItem.id}`);
	li.innerText=todoItem.text;
	list.appendChild(li);
	return;
}
	
	
	
function viewTodoListDom(itemsType) {
	for (var i=0; i<todoItems.length; i++) {
		
		
		
		if ((itemsType == 'completed')&&(todoItems[i].completed == true)) { 
			list.removeChild(document.getElementById(`${todoItems[i].id}`));
		}
				
		if ((itemsType == 'not_completed')&&(todoItems[i].completed == false)) { 
			list.removeChild(document.getElementById(`${todoItems[i].id}`));
		}
				
		if (itemsType == 'all') { 
			list.removeChild(document.getElementById(`${todoItems[i].id}`));
		}
			
	}
	return;
}


function editTodoItemDom(todoItem) {
	
	
	document.getElementById(`${todoItem.id}`).innerText = "new txt test test";
	return;
}

function deleteTodoItemDom(elemId){
	list.removeChild(document.getElementById(`${elemId}`));
	return;
}