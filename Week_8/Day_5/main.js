$.ajax('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=4e1e0a0c397a40c12fee1bfe9c57684f')
    .done(function (response) {
        console.log("line 2");
    });
console.log("line 1");

function add2Nums(x, y) {
    var sum = x + y;
    if (x > 5) {
        return sum;
    }
    console.log(sum);
    return sum * sum;
}

var arr = [1,2,3,4,5,6,7,8,9];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        continue;
    }
    console.log(`index: ${i}`);
    if (i > 3) {
        break;
    }
    console.log(arr[i]);
} 
