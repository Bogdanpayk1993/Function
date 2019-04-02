function month(counter) {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return month[counter - 1]
}

function number_week(counter) {
    var lesson = [[3, 4, 2, 5, 4], [4, 4, 4, 5, 2]]
    return lesson[counter - 1]
}

function addition(a = []) {
    return a[0] + a[1] + a[2] + a[3]   //IT IS BETTER TO USE LOOPS
}

function multiplication(a = []) {
    return a[0] * a[1] * a[2] * a[3]   //The same
}

function arithmetic_mean(a = []) {
    return addition(a) / 4
}

function minimal(a = []) {
    var min = 0      // <-- Here it was better to use negative infinity
    for (var i = 0; i < 4; i++) {
        if (a[min] > a[i]) {
            min = i
        }
    }
    return a[min]
}

function paired_elemants(a = []) {  
    var paired = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            paired++
        }
    }
    return paired
}

function zero_to_one(x, i, arr) {
    if (x == 0) {
        arr[i] = 1
    }
}

function table(x, y) {
    document.write("<table>")
    for (var i = 0; i < x; i++) {
        document.write("<tr>")
        for (var j = 0; j < y; j++) {
            document.write("<td></td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

function map(a = []) {
    var rund = 1 + Math.floor(Math.random() * (36 - 1 + 1))
    return rund
}

var task1 = parseInt(prompt("Введіть номер завдання - ", ''))
switch (task1) {
    case 1:
        var number = parseInt(prompt("Введіть номер місяця - "), '')
        var result = month(number)
        document.write(`Назва місяця - ${result}`)
        break

    case 2:
        var number = parseInt(prompt("Введіть номер тиждня - "), '')
        var result = number_week(number)
        document.write(`<p> Пн - ${result[0]} </p> <p> Вт - ${result[1]} </p> <p> Ср - ${result[2]} </p> <p> Чт - ${result[3]} </p> <p> Пт - ${result[4]} </p>`)
        break

    case 3:
        var nambers = []
        for (var i = 0; i < 4; i++) {
            nambers[i] = parseInt(prompt(`Введіть a${i + 1} - `), '')
        }
        var task3 = parseInt(prompt("Введіть номер операції - "), '')

        switch (task3) {
            case 1:
                var result = addition(nambers)
                document.write(`Сума - ${result}`)
                break
            case 2:
                var result = multiplication(nambers)
                document.write(`Добуток - ${result}`)
                break
            case 3:
                var result = arithmetic_mean(nambers)
                document.write(`Середне арифметичне - ${result}`)
                break
            case 4:
                var result = minimal(nambers)
                document.write(`Мінімальне значення - ${result}`)
                break
        }
        break

    case 4:
        var counter = parseInt(prompt("Введіть кількість елементів масиву - "), '')
        var arr = []

        for (var i = 0; i < counter; i++) {
            arr[i] = parseInt(prompt(`Введіть a[${i + 1}] - `), '')
        }

        var result = paired_elemants(arr)
        document.write(`Кількість парних елементів масиву - ${result}`)
        break

    case 5:
        var counter = parseInt(prompt("Введіть кількість елементів масиву - "), '')
        var arr = []

        for (var i = 0; i < counter; i++) {
            arr[i] = parseInt(prompt(`Введіть a[${i + 1}] - `), '')
        }

        arr.forEach(zero_to_one)
        document.write(`a = [${arr}]`)
        break

    case 6:
        var x = parseInt(prompt("Введіть кількість рядків у таблиці - "), '')
        var y = parseInt(prompt("Введіть кількість столпців у таблиці - "), '')
        table(x, y)
        break

    case 7:
        var arr = []
        for (var i = 0; i < 36; i++) {
            arr[i] = i + 1
        }
        var map = map(arr)
        document.write(`<img src="./map/${map}.png">`)
        break
}
