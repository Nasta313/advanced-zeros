module.exports = function getZerosCount(number, base) {
 
var arrPrime = [];
var j = 0;
var i = 2;

while (i <= base) {
	if (base % i === 0) {
		arrPrime.push(i);
		base = Math.floor(base / i);
	} else i++;
}
var maxPrime = arrPrime[arrPrime.length - 1]; 
 
 //считаем сколько раз встречается множитель
var countS = 0;
for(j = 0; j<=arrPrime.length; j++){
    if(arrPrime[j]==maxPrime){
        countS++;
    }
}

var result = [];
for(var k =0; maxPrime < number; k++){
    result[k] = Math.floor(number/maxPrime);;
    number = result[k];
}

var countZero = 0;
for(var k = 0; k < result.length; k++){
    countZero += result[k];
}

    countZero = Math.floor(countZero/countS);
    return countZero;
 
}