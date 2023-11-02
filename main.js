// Создать объект myBrowser со свойствами name 
// (значение “Chrome”) и version (значение «9.2») - двумя способами
// const myBrowser = {
//     "name": "chrome",
//     "version": 9.2
// };
// const myBrowser = new Object();
// myBrowser.name = "Chrome";
// myBrowser.version = 9.2;
// console.log(myBrowser)


//  Создать объект cinema со свойствами soldTickets (хранит в себе число,
// которое отображает кол-во проданных билетов) и ticketCost (цена билета) и задайте значения. 
// Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.

// const cinema = {
//         "soldTickets": 1000,
//         "ticketCost": 5, 
//     };   
//     function calc (a, b) {
//         return a * b
//     }
//     const result = calc(cinema.soldTickets, cinema.ticketCost)
//     console.log(result);
    

// Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]]. 
//     То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]].
//      Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries

// const something = {
//     dima: "Техподдержка",
//     Alim: "student"
// }
// function objectToArr (Obj) {
//            return Object.entries(Obj)
//         }

//         console.log(objectToArr(something));



//Дан объект. Нужно извлечь число 123 одной строкой

// const myCrazyObject = {
//     someArray:[7, 9, {purpose:"путаница", number: 123 }, 3.3],
// }
// console.log(myCrazyObject.someArray[2].number);



// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//  Тут вам пригодится метод Array.isArray()
// const lol = {
//     dima: "neТехподдержка",
//     Alim: "student"
// }
// const numbers = [1, 2, 3];
// const noll = null;
// function isItObject(element) {
//     return typeof element === 'object' && !Array.isArray(element) && element !== null;
//   }
//   console.log(isItObject(lol));
//   console.log(isPlainObject(numbers)); 
//   console.log(isPlainObject(noll)); 
    



// Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.

// const names = ['john', 'jane', 'kate', 'peter'];
// let n_name = names.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase()
// );
// console.log(n_name)


// Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное. 
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
// Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.
// const arr =[]
// function range(a,b) {
//  for(let i=0;  i <= b; i++) {
//     arr.push(i)
//  }
// } 
//     range(1,7)
//     function sum(arr){

//     sum(arr)
// }
//     console.log(result);


// function range(a, f) {
//     const arr = [];
//     for (let i = a; i <= f; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }
  
//   function sum(arr) {
//     let total = 0;
//     for (let num of arr) {
//       total += num;
//     }
//     return total;
//   }
  
//   const numbers = range(1, 10);
//   const result = sum(numbers);
//   console.log(result);


// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект


// function findSquareRoot(number) {
//     const squareRoot = Math.sqrt(number);
//     const result = {
//       floor: Math.floor(squareRoot),
//       ceil: Math.ceil(squareRoot)
//     };
//     return result;
//   }
  
//   const number = 587;
//   const result = findSquareRoot(number);
//   console.log(result);






//  Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. 
// Для работы понадобится for...in
// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
//   };
  
//   for (let key in obj) {
//     console.log(key + ' - ' + obj[key] + '.');
//   }