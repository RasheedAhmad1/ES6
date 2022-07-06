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
// var numbers = [1, 2, 3, 4, 5];
// var pos;
// forEach(pos = 0; pos<numbers.length; pos++) {
//     console.log('Position => ' + pos + ' Value => ' + numbers[pos]);
// }

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