var list = document.getElementById('test-list');				 


var rawTodoItems  =[];

var todoItems  =[];
var todoItemsIndex = {};



var initTodoItems = function() {
		$.ajax({
			type: 'GET',
			url: "todos.json",
			dataType: 'json',
			success: function(data) {
				console.log(data.data);	
				rawTodoItems = data.data;},
			async: false
		});
	};

	
	


	
initTodoItems();


for (var i=0; i<rawTodoItems.length; i++){
	addTodoItem(rawTodoItems[i]);
	}

console.log(todoItems);

console.log (viewTodoList('completed'));
viewTodoListDom('completed');

editTodoItem(9, 'newText');
console.log (todoItems);


deleteTodoItem(2);
console.log (todoItems);

completeTodoItem(11);
console.log (todoItems);



