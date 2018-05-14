function renderTodoItemsDom(todoItems) {
	var lis = '';
	for (var i=0; i< todoItems.length; i++){
		lis = lis+createLi(todoItems[i]);
	}
	list.innerHTML = lis;
}

function renderTodoItemDom(todoItem) {
	var lis = list.innerHTML;
	list.innerHTML=lis+createLi(todoItem);
}

function createLi(todoItem){
		var li = "<li id="+todoItem.id+">id: <span class=\"id\">"+ todoItem.id +"</span>  text: <span class=\"text\">"+todoItem.text+'</span>  completed: <span class=\"completed\">'+todoItem.completed +'</span>'
		+'<input class="edit" value="Edit" type="button" onclick="(editTodoItemDom('+todoItem.id+', this.parentNode))" /input>'
		+'<input value="Del" type="button" onclick="(deleteTodoItem('+todoItem.id+'))" /input> </li> ';
		return li;
	}



/*function addTodoItemDom(todoItem) {
	var li = document.createElement	('li');
	li.setAttribute('id', `${todoItem.id}`);
	li.innerText=todoItem.text;
	list.appendChild(li);
	return;
}
*/
	
	
function viewTodoListDom(itemsType) {
	for (var i=0; i<todoItems.length; i++) {
		
		
		
		if ((itemsType == 'completed')&&(todoItems[i].completed == true)) { 
			list.removeChild(document.getElementById(`${todoItems[i].id}`));
		}
				
		if ((itemsType == 'not_completed')&&(todoItems[i].completed == false)) { 
			list.removeChild(document.getElementById(`${todoItems[i].id}`));
		}
				
	}
//	renderTodoItemsDom(todoItems);
	return;
}


function editTodoItemDom(todoItemId, elem) {
	
	
	var spanText = elem.getElementsByClassName('text')[0];
	var spanCompleted = elem.getElementsByClassName('completed')[0];
	var editButton = elem.getElementsByClassName('edit')[0];
	
	var todoItem = todoItems.find(function(t){return t.id==todoItemId}); 
	
	
	var editText = `<input type="text" class="text" value="${todoItem.text}"></input>`;
	
	var editCompleted = `<input type="checkbox" class="completed" ${todoItem.completed?"checked":""}></input>`;	
	
	var saveButton = document.createElement('input');
	
	//'<input class="save" value="Save" type="button"></input>';
	saveButton.type = 'button';
	saveButton.className = 'save';
	saveButton.value = 'Save';
	saveButton.onclick = function (){saveTodoItemDom(todoItemId, elem);};
	
	elem.appendChild(saveButton);
	spanText.outerHTML = editText;
	spanCompleted.outerHTML = editCompleted;
	editButton.style.display = 'none';
	
	
	
	console.log(elem);
	
	
//	document.getElementById(`${todoItem.id}`).innerText = todoItem.text;
	return;
}

function saveTodoItemDom(todoItemId, elem){
	
	
	var spanText = elem.getElementsByClassName('text')[0];
	var spanCompleted = elem.getElementsByClassName('completed')[0];
	var editButton = elem.getElementsByClassName('edit')[0];
	var saveButton = elem.getElementsByClassName('save')[0];
	
	var todoItem = todoItems.find(function(t){return t.id==todoItemId}); 
	
	
	
	var editText = `<span class="text" >${spanText.value}</span>`;
	var editCompleted = `<span class="completed">${spanCompleted.checked}</span>`;	
		
	elem.removeChild(saveButton);
	
	spanText.outerHTML = editText;
	spanCompleted.outerHTML = editCompleted;
	editButton.style.display = null;
	
	todoItem.text = spanText.value;
	todoItem.completed = spanCompleted.checked;
	
		
}


function deleteTodoItemDom(elemId){
	list.removeChild(document.getElementById(elemId.toString()));
	return;
}
