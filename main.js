const kupay=function (a){
    return console.log(a*10)

}

const asos=function (a,funksiya){
    funksiya(a)
}
asos(3,kupay)



const yosh=function (age){
    return function (year){
        return console.log(year-age)
    }
}

let x=yosh(20)
x(2022)


let obj={
    firstName:"Jalol",
    age:21,
    birthYear(a){
        return console.log(a-this.age)
    }
}

let b=obj.birthYear
obj.birthYear(2022)

let me={
    firstName: "Ziyo",
    age:20
}

b.call(me,2022)

let book1={
    cost:2000,
    name:"O'tkan kunlar",
    birthBook(year){
        return console.log(2022-year)
    }
}

let book2={
    cost:3000,
    name:"Bahor"
}

let kitob=book1.birthBook;
kitob(1991)

kitob.call(book2,...[2016])




