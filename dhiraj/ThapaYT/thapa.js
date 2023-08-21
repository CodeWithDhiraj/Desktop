// console.log("hello duniya");
// console.log(5 === 20);
// let x = 40;
// let y = 19;
// let sum= x+y;
// console.log(sum);

let year = prompt('enter year');
year =Number.parseInt(year)
if(year% 4 == 0){
    if(year % 100 == 0){
        alert("Not a leap Year")
        if(year %400 == 0){
            alert('This is a leap year')
        }
    }
    alert('This is a leap year')
}
else{
    alert("Not a leap Year")
}

