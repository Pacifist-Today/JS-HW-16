let num = +prompt("Введите число")
// let pow = +prompt("Введите степень для числа")

let powFunc = function (number, power = 1) {
    if (isNaN(number) || isNaN(power)) {
        return "some error"
    } else if (number === 0) {
        alert("Введите число")
    }
    else {
            let result = Math.pow(number, power)
            return result
    }
}

let Calc = powFunc(num)
if (Calc !== 0 && Calc !== undefined) {
    alert(Calc)
    console.log("Результат с степенью по умолчанию: " + Calc)
}
console.log("Результат с выбранным числом (5) и степенью (3): " + powFunc(5,3))

// let num = +prompt("Введите число")
// let pow = +prompt("Введите степень для числа")
//
// function powFunc(number, degree = 1) {
//     console.log(number, degree)
//     if (typeof number !== "number" || typeof degree !== "number") {
//         return "some error"
//     }   else {
//         let result = Math.pow(number, degree)
//         console.log(result)
//         return result
//     }
// }