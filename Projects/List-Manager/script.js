// window.onload

window.onload = function() {
    var ul = document.createElement('ul')
    ul.setAttribute('id', 'itemList')
    document.getElementById('listContainer').appendChild(ul)
}

// add buttons -- remove, clone, insertBefore

function appendButtons(listItem) {
// remove button
var removeBtn = document.createElement('button')
removeBtn.textContent = "Remove"
removeBtn.onclick = function() {
    listItem.parentNode.removeChild(listItem)
}

// clone button
var cloneBtn = document.createElement('button')
cloneBtn.textContent = "Clone"
cloneBtn.onclick = function() {
    var itemText = listItem.firstChild.value // uses input value for cloning
    var clonedItem = createListItem(itemText)
    listItem.parentNode.insertBefore(clonedItem, listItem.nextSibling)
}

//insertBefore button

var insertBeforeBtn = document.createElement('button')
insertBeforeBtn.textContent = "Insert Before"
insertBeforeBtn.onclick = function() {
    var input = document.getElementById('itemInput')
    if (input.value.trim !== '') {
        var newListItem = createListItem(input.value)
        listItem.parentNode.insertBefore(newListItem, listItem)
        input.value = ""
    }
}

listItem.appendChild(removeBtn)
listItem.appendChild(cloneBtn)
listItem.appendChild(insertBeforeBtn)

}



// create function to generate list items

function createListItem(text) {
    var listItem = document.createElement('li')
    var itemInput = document.createElement('input')
    itemInput.type = 'text'
    itemInput.value = text
    itemInput.onchange = function() {
        itemInput.value = this.value
    }
    listItem.appendChild(itemInput)
    // Buttons will be added one list items is added
    appendButtons(listItem) // append buttons to the new list item
    return listItem

}

// function addItem()

function addItem() {
    var input = document.getElementById('itemInput')
    if (input.value.trim !== '') {
        var listItem = createListItem(input.value)
        console.log(listItem)
        var list = document.getElementById('itemList')
        if (list.firstChild) {
            list.insertBefore(listItem, list.firstChild)
        }

        else {
            list.appendChild(listItem)
        }

    }
    input.value = ""

}
