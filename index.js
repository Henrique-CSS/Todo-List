
listItens = [];

function getListItens() {
    num = listItens.length;
    if (document.getElementById('todo_input').value == '') {
        alert('Write an iten to put in the list');
    } else {
        listItens[num] = document.getElementById('todo_input').value;
    }
}

function addItem() {

    getListItens();
    list = document.getElementById('List-todo');
    list.innerHTML = '';
    document.getElementById('todo_input').value = '';
    var ItemCount = 1;
    for (var i = 0; i < listItens.length; i++) {
        
        if (listItens[i] != '') {
            list.innerHTML += '<span id="Item' + i + '"><input type="checkbox"><span class="itens">' + '    Item ' + ItemCount + " - " + listItens[i] + '</span><input type="button" value="X" onclick="deleteItem(' + i + ')"></span><br>';
        } else {
            list.innerHTML += '';
            ItemCount = ItemCount - 1;
        }
        ItemCount++;
    }
}
function Refresh() {

    listItens[num] = document.getElementById('todo_input').value;
    list = document.getElementById('List-todo');
    list.innerHTML = '';
    document.getElementById('todo_input').value = '';
    var ItemCount = 1;
    for (var i = 0; i < listItens.length; i++) {
        
        if (listItens[i] != '') {
            list.innerHTML += '<span id="Item' + i + '"><input type="checkbox"><span class="itens">' + '    Item ' + ItemCount + " - " + listItens[i] + '</span><input type="button" value="X" onclick="deleteItem(' + i + ')"></span><br>';
        } else {
            list.innerHTML += '';
            ItemCount = ItemCount - 1;
        }
        ItemCount++;
    }
}

function deleteItem(value) {
    listItens[value] = '';
    document.getElementById('Item' + value).remove;
    Refresh();
}
