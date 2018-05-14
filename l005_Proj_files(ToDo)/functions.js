var initTodoItems = function() {
	var rawTodoItems=[];
	$.ajax({
		type: 'GET',
		url: "todos.json",
		dataType: 'json',
		success: function(data) {
				rawTodoItems = data.data;},
		async: false
	});
	for (var i=0; i<rawTodoItems.length; i++){
		addTodoItem(rawTodoItems[i]);
	};
};


function addNewTodoItem(){
	var newTodoItem={"text":"New todoItem", "completed":true, "id":todoItemsIndex.lastId+1};
	addTodoItem(newTodoItem);
}


function addTodoItem(todoItem) {
	
	if (todoItemsIndex[todoItem.id]!= true) {
		if((todoItem.text.length!=0)&&(todoItem.completed!=undefined)) {
			todoItems.push(todoItem);
			renderTodoItemDom(todoItem);
			todoItemsIndex[todoItem.id] = true;
			todoItemsIndex.lastId=todoItem.id;
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
	renderTodoItemsDom(todoList);
	return todoList;
}

function editTodoItem(todoItemId, newText){
	
	if (newText!=undefined) {
		for (var i=0; i<todoItems.length;  i++){
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
		for (var i=0; i<todoItems.length;  i++){
			if (todoItems[i].id==todoItemId) {
				deleteTodoItemDom(todoItemId);
				todoItems.splice(i, 1); 
				return true;
			}
		}
	}
	return false;
	
	
	
	
}


function completeTodoItem(todoItemId){
	
	if (todoItemId!=undefined) {
		for (var i=0; i<todoItems.length; i++){
			if (todoItems[i].id==todoItemId) {
				todoItems[i].completed = true; 
				return true;
			}
		}
	}
	return false;
	
	
	
}
