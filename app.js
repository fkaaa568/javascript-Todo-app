// var list = document.getElementById("my-list");


// function addTodo(){
// var todo_item = document.getElementById("todo-list");


// var li =  document.createElement('li');
// var liText = document.createTextNode(todo_item.value);
// li.setAttribute("class","li");
// li.appendChild(liText);


// var del_btn = document.createElement("button");
// var delText = document.createTextNode("DELETE");
// del_btn.setAttribute("onclick","deleteItem(this)");
// del_btn.appendChild(delText);

// li.appendChild(del_btn);
// list.appendChild(li);

//     todo_item.value = "";

// var edit_btn = document.createElement("button");
// var editText = document.createTextNode("EDIT");
// edit_btn.setAttribute("onclick","editItems(this)");
// edit_btn.appendChild(editText);

// li.appendChild(edit_btn);   

// }

// function deleteItem(btn){
//     btn.parentNode.remove();
// }

// function deleteAll(){
//     list.innerHTML = "";
// }


// function editItems(edi){
    

//     var editValue = prompt("Enter edit value",edi.parentNode.firstChild.nodeValue);
//     edi.parentNode.firstChild.nodeValue = editValue;
    
// }


//QuerySelectors
document.querySelector('form').addEventListener('submit',SubmitForm);
document.querySelector('ul').addEventListener('click',ClickDelete);
document.getElementById('clearAll').addEventListener('click',clearAll);

function SubmitForm(e){

    e.preventDefault();

    var input = document.querySelector('input');

    if(input.value !='')
            addTodo(input.value);
            input.value = '';        
}

function ClickDelete(e){
    if(e.target.name == 'checkButton')

    checkTodo(e);
    if(e.target.name == 'deleteButton')

    deleteTodo(e);
}



function addTodo(todo){
    var ul = document.querySelector('ul');
    var li = document.createElement('li');

    li.innerHTML = `
          <span class="todo-items">${todo}</span> 
          <button name="checkButton"><i class="fas fa-check-square"></i></button>
          <button name="deleteButton"><i class="fas fa-trash"></i></button> `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);

}

function checkTodo(e){
    var check = e.target.parentNode;

    if (check.style.textDecoration == 'line-through')
        check.style.textDecoration = 'none';

    else
        check.style.textDecoration = 'line-through';
        
}

function deleteTodo(e){

    var del = e.target.parentNode;
    del.remove();
}

function clearAll(e){
        document.querySelector('ul').innerHTML = '';
}