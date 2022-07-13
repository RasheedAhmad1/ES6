var button = document.getElementById('add-element');
var list = document.getElementById('list-items');

button.addEventListener('click', function() {
    // Create new HTML element
    var new_element = document.createElement('li'); 

    // Create new Text Node
    var new_node = document.createTextNode('Item ' + (list.childElementCount+1));

    // Append the Text Node to the newly created HTML element
    new_element.appendChild(new_node);

    // Create ID for the new HTML element
    new_element.id = "item" + (list.childElementCount+1);

    // Appent the new HTML element to the list
    // list.appendChild(new_element); commented for firstElementChild

    // Now grab the Items count number
    // var count = list.childElementCount;
    // console.log(count); Used in created node above

    // Add an element before a certain element
    var first = list.firstElementChild;
    list.insertBefore(new_element, first);
});