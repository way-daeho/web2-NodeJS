var fs=require('fs');

// readFileSync

/*
console.log('A');
var result=fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');
*/

/*
동기와 비동기의 어떻게 실행될 까? 예를 들어서 일이 끝날 때 까지 지켜볼 것인가??
다른일을 하는 것이 맞는 거다~
*/

console.log('A');
fs.readFile('syntax/sample.txt','utf8',function(err,result){
    console.log(result);
});
console.log('C');
