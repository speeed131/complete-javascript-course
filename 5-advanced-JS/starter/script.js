//通常のオブジェクト
var john = {
    name: 'John',
    yearOfBirth: 1980,
    job: 'teacher'
};

//コンストラクタ関数 (PHPで言うクラス)
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('John', 1990, 'teacher');

console.log(Object.prototype === window.Object.prototype);


// console.log(john);
// console.log(Person);
// console.log(john.valueOf());


//コールバック関数
let years = [1997, 2019, 1945, 1987];

function setAgeInArrayByYears(yearsArray, useFun){
    let ageArray = [];

    for(let arrayLength = 0; arrayLength < yearsArray.length; arrayLength++) {
        ageArray.push(useFun(yearsArray[arrayLength]));
    };

    return ageArray;
}

function calculateAgeByYear(year){
    return 2020 - year;
}

function isFullAge(age){
    return age >= 18;
}

age = setAgeInArrayByYears(years, calculateAgeByYear)

isFull = setAgeInArrayByYears(age, isFullAge);

console.log(age);


// functions return function

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ' is designer');
        }
    } else if(job === 'engineer') {
        return function(name) {
            console.log(name + ' is engineer');
        }
    } else {
        return function(name) {
            console.log(name);
        }
    }
}

var designerQuesition = interviewQuestion('designer');

designerQuesition('Daiki');

interviewQuestion('engineer')('Daiki');



/*即時実行関数について
*/

//普通に実行
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

// game();

//以下が即時実行関数 （）でくくり、関数とみなす
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


//Closures関数

//以下のinterviewQuestionをクロージャ関数で書き換える。
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


//returnが１個しかなく、クロージャを使ったほうがきれい。
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');



//レキシカルスコープについて。ここのfunction A が定義された時点で、x = 10なため、function B()を呼び出しても、x = 10 である。
var x = 10; 
function A(){
  console.log(x);  //この時の静的なスコープはx=10
}
function B(){
  var x = 1000;  //ここでもxが定義されている
  A();  //この時のxは10?1000?
}
A();  //10
B(); //-> 10 (1000ではない!)


/*
クロージャの主の使い方
*/
// 例1 : パスワードを 外部から変更されない変数に保存する

var getPass = (function(){
    var passCode = "1bGf(eaQW&8"; // 外部から変更できないようにしたい
  
    //以下をクロージャーとしてgetPassに渡す
    return function () {
      return passCode;
    };
  })();
  
  getPass(); // パスワードの取得


/*
クロージャが記憶している環境内の変数をクロージャ自身が記憶している。

*/
//  例2 : プライベートなカウンター変数を実装する

var counter = (function () {
  var count = 0;  //プライベートなカウンター変数
  return function () {
      count ++;  //呼び出されると更新
      return count;
  };
}());

counter(); //1
counter(); //2

counter.count; //->undefined(外部からカウンター変数にはアクセスできない)


/*
初回の呼び出し時のreturn と２回目以降のreturnを分けて、メッセージを分けている。
*/
// 例3 : 初回呼び出し時とそれ以降でメッセージを出しわける

var clickMessage = (function (){
  var isClicked = false;
  return function() {
  if (isClicked) {
  return "すでにクリックしていますね～。";
  }
  isClicked = true;
  return "初クリック！";
  }
})();

clickMessage (); // 初クリック！
clickMessage (); // すでにクリックしていますね～。



// 例４ エンクロージャに引数を渡すことで、処理内容の異なるクロージャを生成することが可能になる。
function circle_area_func(pi){
    //円の面積を求める関数を返す
    function circle_area(radius){
  return pi * radius * radius;
  }
    return circle_area;
  }
  
  //円周率を 3 に設定した場合の面積を計算する関数を生成
  caFunc1 = circle_area_func(3)
  
  //次に、円周率を3.14に設定した場合の関数を生成
  caFunc2 = circle_area_func(3.14)
  
  //上記で作成した２つの関数に、半径=2 を引数に与えて、演算結果を取得
  caFunc1(2); //->12
  caFunc2(2); //->12.56