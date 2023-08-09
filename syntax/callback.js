/*fs.readFile('syntax/sample.txt','utf8',function(err,result){
    console.log(result);
    위 함수를 이용해서 파일 읽어주고, 3 번째 인자인 함수를 이용해서 출력해줘!

    콜백함수란 무엇인가?
    일이 다 끝나면 나를 불러줘(실행해)

    한번에 이해하려고 하지 말고, 어렵다고 좌절할 필요도 없다!
    여러 번 보면서 이해하기~
});*/

/*
function a(){
    console.log('A');
}
*/

//자바스크립트에서는 함수가 값이다.

var a= function(){ // 이름이 없는 함수 === 익명함수
    console.log('A');
}

// 함수가 일을 끝냈으니, 다음일을 하세요 라고 하고 싶다면 인자로 callback을 받으면 된다.
function slowfunc(callback){
    callback();
}

slowfunc(a);
