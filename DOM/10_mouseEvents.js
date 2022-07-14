
var btn = document.getElementById('btn');

// Mouse down event
var down = 0;
btn.addEventListener('mousedown', function() {
    var elementCount = document.querySelector('#down');
    down++;
    elementCount.innerHTML = down;
});

// Mouse up event
var up = 0;
btn.addEventListener('mouseup', function() {
    var elementCount = document.querySelector('#up');
    up++;
    elementCount.innerHTML = up;
});

// Click event
var click = 0;
btn.addEventListener('click', function() {
    var elementCount = document.querySelector('#click');
    click++;
    elementCount.innerHTML = click;
});

// Mouse double click event
var doubleClick = 0;
btn.addEventListener('dblclick', function() {
    var elementCount = document.querySelector('#dblclick');
    doubleClick++;
    elementCount.innerHTML = doubleClick;
});

// Mouse Over event
var over = document.getElementById('over');
var overCount = 0;
over.addEventListener('mouseover', function() {
    var elementCounter = document.querySelector('#over > h4');
    overCount++;
    elementCounter.innerHTML = overCount;
});

// Mouse Enter event
var enter = document.getElementById('enter');
var enterCount = 0;
enter.addEventListener('mouseenter', function() {
    var elementCounter = document.querySelector('#enter > h4');
    enterCount++;
    elementCounter.innerHTML = enterCount;
});

// Mouse Move event
var move = document.getElementById('move');
var moveCounter = 0;
move.addEventListener('mousemove', function() {
    var elementCounter = document.querySelector('#move > h4');
    moveCounter++;
    elementCounter.innerHTML = moveCounter;
});