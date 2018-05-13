function addTodoItem(todoItem) {
	
	if (todoItemsIndex[todoItem.id]!= true) {
		if((todoItem.text.length!=0)&&(todoItem.completed!=undefined)) {
			todoItems.push(todoItem);
			addTodoItemDom(todoItem);
			todoItemsIndex[todoItem.id] = true;
			return true;
		}
	}
	else return false; 
}


function viewTodoList(itemsType){
	
	var todoList = [];
	
	
	for (var i=0; i<todoItems.length;i++) {
		
		if ((itemsType == 'completed')&&(todoItems[i].completed == true)) { 
			todoList.push(todoItems[i]); 
		}
				
		if ((itemsType == 'not_completed')&&(todoItems[i].completed == false)) { 
			todoList.push(todoItems[i]); 
		}
				
		if (itemsType == 'all') { 
			todoList.push(todoItems[i]); 
		}
			
	}
	return todoList;
}

function editTodoItem(todoItemId, newText){
	
	if (newText!=undefined) {
		for (i=0; i<todoItems.length;  i++){
			if (todoItems[i].id==todoItemId) {
				todoItems[i].text = newText; 
				editTodoItemDom(todoItems[i]);
				return true;
			}
		}
	}
	return false;
}


function deleteTodoItem(todoItemId){
	
	if (todoItemId!=undefined) {
		for (i=0; i<todoItems.length;  i++){
			if (todoItems[i].id==todoItemId) {
				todoItems.splice(i, 1); 
				deleteTodoItemDom(todoItemId);
				return true;
			}
		}
	}
	return false;
	
	
	
	
}


function completeTodoItem(todoItemId){
	
	if (todoItemId!=undefined) {
		for (i=0; i<todoItems.length; i++){
			if (todoItems[i].id==todoItemId) {
				todoItems[i].completed = true; 
				return true;
			}
		}
	}
	return false;
	
	
	
}
