
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('Sm'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5));



const years = [1990, 1997, 1982, 1937];

const age = years.map(el => 2016 - el);
console.log(age);


const box = {
    color: 'green',
    position: 1,

    clickMe: function() { //もしここで矢印を使ったら、グローバルなthisになってしまう。

        document.querySelector('.green').addEventListener('click',
        () => {
            let str = 'This is box number' + this.position + this.color;
            alert(str);
        });
    }
}
box.clickMe()


