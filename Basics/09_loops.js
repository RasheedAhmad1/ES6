// while loop
var x = 1;
while(x <= 3) {
    console.log(x);
    x++;
}

// for loop
var numbers = [1, 2, 3, 4];
var pos;
for(pos = 0; pos<numbers.length; pos++) {
    console.log('Position => ' + pos + ' Value => ' + numbers[pos]);
}

// forEach loop
const vowels = ['A', 'E', 'I', 'O', 'U'];

vowels.forEach(item => {
    console.log(item);
});

// forEach loop with index
vowels.forEach((item, i) => {
    console.log(item, i);
});

// break keyword
var numbers = [1, 2, 3, 4];
var pos;
for(pos = 0; pos < numbers.length; pos++) {
    if(pos == 2) break;
        console.log('Position => ' + pos + ' Value => ' + numbers[pos]);
}

// continue keyword
var numbers = [1, 2, 3, 4, 5, 6];
var pos;
for(pos = 0; pos < numbers.length; pos++) {
if(pos%2==0) continue;
console.log(numbers[pos]);
}