function perimeter_and_area(Array) {
    var si=[]
    si[0] = Math.sqrt(Math.pow((Array[0][0] - Array[1][0]),2) + Math.pow((Array[0][1] - Array[1][1]),2))
    si[1] = Math.sqrt(Math.pow((Array[1][0] - Array[2][0]),2) + Math.pow((Array[1][1] - Array[2][1]),2))
    si[2] = Math.sqrt(Math.pow((Array[2][0] - Array[0][0]),2) + Math.pow((Array[2][1] - Array[0][1]),2))
    var p=[]
    p[0] = si[0] + si[1] + si[2]
    var pp = p[0] / 2
    p[1] = Math.sqrt(pp * (pp - si[0]) * (pp - si[1]) * (pp - si[2]))
    return p
}

function point(Array) {
    var rerult = (Array[2][0] - Array[0][0]) * (Array[1][1] - Array[0][1]) - (Array[1][0] - Array[0][0]) * (Array[2][1] - Array[1][1])
    return rerult
}

function rectangular_triangle(Array) {
    var si=[]
    si[0] = parseFloat(Math.sqrt(Math.pow((Array[0][0] - Array[1][0]),2) + Math.pow((Array[0][1] - Array[1][1]),2)))
    si[1] = parseFloat(Math.sqrt(Math.pow((Array[1][0] - Array[2][0]),2) + Math.pow((Array[1][1] - Array[2][1]),2)))
    si[2] = parseFloat(Math.sqrt(Math.pow((Array[2][0] - Array[0][0]),2) + Math.pow((Array[2][1] - Array[0][1]),2)))
    for(var i = 0; i < 2; i++)
    {
        if(si[i] > si[i + 1])
        {
            var b = si[i]
            si[i] = si[i + 1]
            si[i + 1] = b
            i = 0
        }
    }
    var p=[]
    p[0] = parseInt(Math.pow(si[0],2) + Math.pow(si[1],2)) - parseInt(Math.pow(si[2],2))
    p[1] = si[2]
    return p
}

function rectangle(Array) {
    var result=[]
    if (Array[0][0] == Array[1][0] && Array[1][1] == Array[2][1] && Array[2][0] == Array[3][0] && Array[3][1] == Array[0][1])
    {
        result[0] = 1
        var p=[] 
        p[0] = Array[1][1] - Array[0][1] 
        p[1] = Array[2][0] - Array[1][0]
        result[1] = p[0] * p[1] 
    }
    else
    {
        result[0] = 0
    }
    return result
} 

function coordinates_middle(Array) {
    var result=[]
    result[0] = (Array[2][0] - Array[0][0]) / 2
    result[1] = (Array[1][1] - Array[0][1]) / 2
    return result  
}

function radius(Array) {
    var si=[]
    si[0] = Math.sqrt(Math.pow((Array[0][0] - Array[1][0]),2) + Math.pow((Array[0][1] - Array[1][1]),2))
    si[1] = Math.sqrt(Math.pow((Array[1][0] - Array[2][0]),2) + Math.pow((Array[1][1] - Array[2][1]),2))
    si[2] = Math.sqrt(Math.pow((Array[2][0] - Array[0][0]),2) + Math.pow((Array[2][1] - Array[0][1]),2))
    var pp = (si[0] + si[1] + si[2]) / 2
    var r = (si[0] * si[1] * si[2]) / (4 * Math.sqrt(pp * (pp - si[0]) * (pp - si[1]) * (pp - si[2])))
    return r
}

function volume_bullet(Array) {
    var r=[]
    r = Math.sqrt(Math.pow((Array[1][0] - Array[0][0]),2) + Math.pow((Array[1][1] - Array[0][1]),2))
    var v = (4/3) * Math.PI * Math.pow(r,3) 
    return v 
}

function arithmetic_progressian(a, d, n) {
    var pn=[]
    pn[0] = a + d * (n - 1)
    pn[1] = ((a + pn[0]) * n) / 2 
    return pn
}

function geometric_progression(b, q, n) {
    var pn=[]
    pn[0] = b * Math.pow(q,n - 1)
    pn[1] = (b * (1 - Math.pow(q,n))) / (1 - q)
    return pn
}

function check_down_geometric_progression(q) {
    var result = 0
    if(q < 1)
    {
        result = 1
    }
    return result 
}

function down_geometric_progression(b, q) {
    var s = b/(1 - q)
    return s
}

function discriminator(a, b, c) {
    var d
    d = Math.pow(b, 2) - (4 * a * c)
    return d
}

function quadratic_equation(a, b, c, d) {
    var result=[] 
    if(d > 0)
    {
        result[0] = ((b * -1) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
        result[1] = ((b * -1) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a) 
    }
    if(d == 0)
    {
        result[0] = -1 * (b / (2 * a))
    }
    if(d < 0)
    {
        result[0] = "Рівняння не має коріння на множині дійсних чисел"
    }
    return result
}

function deposit(a, b, n) {
    for(var i = 0; i < n * 12; i++)
    {
        a += (a / 100) * b 
    }
    return a
}

var task2 = parseInt(prompt("Введіть номер завдання - "),'')
switch(task2) {
    case 1:
        var a = new Array(3) 

        for(var i = 0; i < 3; i++)
        {
            a[i] = new Array(2)
        }

        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }
        var c = perimeter_and_area(a)
        document.write(`<p> Перемитер трикутника - ${c[0]} </p>`)
        document.write(`<p> Площа трикутника - ${c[1]} </p>`)
    break

    case 2:
        var a = new Array(3)
        
        for(var i = 0; i < 3; i++)
        {
            a[i] = new Array(2)
        }
        
        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть а[${i + 1}][${j + 1}] - `),'')
            }
        }
        var c = point(a)

        if(c == 0)
        {
            document.write("<p> Точки лежать на одній прямій </p>")
        }
        else
        {
            document.write("<p> Точки не лежать на одній прямій </p>")
        }
    break

    case 3:
        var a = new Array(3)

        for(var i = 0; i < 3; i++)
        {
            a[i] = new Array(2)
        }

        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть а[${i + 1}][${j + 1}] - `),'')
            }
        }

        var c = rectangular_triangle(a)

        if(c[0] == 0)
        {
            document.write(`<p> Гіпотинуза = ${c[1]} </p>`)
        }
        else
        {
            document.write(`<p> Трикутник не прямокуткий </p>`)
        }
    break

    case 4:
        var a = new Array(4)

        for(var i = 0; i < 4; i++)
        {
            a[i] = Array(2)
        }

        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }

        var c = rectangle(a)

        if(c[0] == 1)
        {
            document.write(`<p> Периметер прямокутника - ${c[1]} </p>`)
        }
        else
        {
            document.write(`<p> Чотирикутник не є прямокутником </p>`)
        }
    break

    case 5:
        var a = new Array(4)

        for(var i = 0; i < 4; i++)
        {
            a[i] = Array(2)
        }

        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }

        var c = coordinates_middle(a)

        document.write(`<p> Координити точки перетину діагоналей - (${c[0]},${c[1]})`)
    break

    case 6:
        var a = new Array(3) 

        for(var i = 0; i < 3; i++)
        {
            a[i] = new Array(2)
        }

        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }
        var c = perimeter_and_area(a)
        document.write(`<p> Площа трикутника - ${c[1]} </p>`)
    break

    case 7:
        var a = new Array(3) 

        for(var i = 0; i < 3; i++)
        {
            a[i] = new Array(2)
        }

        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }
        var c = radius(a)
        document.write(`<p> Радіус описаного кола навколо трикутника - ${c} </p>`)
    break

    case 8:
        var a = new Array(2)

        for(var i = 0; i < 2; i++)
        {
            a[i] = new Array(2)
        }
        
        for(var i = 0; i < 2; i++)
        {
            for(var j = 0; j < 2; j++)
            {
                a[i][j] = parseInt(prompt(`Введіть a[${i + 1}][${j + 1}] - `),'')
            }
        }
        
        var c = volume_bullet(a)

        document.write(`<p> Об'єм кулі - ${c} </p>`)
    break

    case 9: 
        var a = parseInt(prompt("Перший член прогресії - "),'')
        var d = parseInt(prompt("Різниця прогресії - "),'')
        var n = parseInt(prompt("Потрібний член прогресії - "),'')

        var c = arithmetic_progressian(a, d, n)

        document.write(`<p> ${n}-тий член прогресії - ${c[0]} </p>`)
        document.write(`<p> Сума перших ${n}-ти членів прогресії - ${c[1]}`)
    break

    case 10: 
        var b = parseInt(prompt("Перший член прогресії - "),'')
        var q = parseInt(prompt("Знаменник прогресії - "),'')
        var n = parseInt(prompt("Потрібний член прогресії - "),'')

        var c = geometric_progression(b, q, n)

        document.write(`<p> ${n}-тий член прогресії - ${c[0]} </p>`)
        document.write(`<p> Сума перших ${n}-ти членів прогресії - ${c[1]}`)
    break

    case 11:
        var b = parseFloat(prompt("Перший член прогресії - "),'')
        var q = parseFloat(prompt("Знаменник прогресії - "),'')

        var c = check_down_geometric_progression(q)
        if(c == 1)
        {
            var c1 = down_geometric_progression(b, q)
            document.write(`<p> Сума нескінченно спадної геометричної прогресії - ${c1} </p>`)
        }
        else
        {
            document.write(`<p> Геометрична прогресія не є спадною </p>`) 
        }
    break

    case 12:
        var a = parseInt(prompt("Введіть коефіцієнт a - "),'')
        var b = parseInt(prompt("Введіть коефіцієнт b - "),'')
        var c = parseInt(prompt("Введіть коефіцієнт с - "),'')

        var d = discriminator(a, b, c)
        document.write(`<p> D = ${d} </p>`)

        var x = quadratic_equation(a, b, c, d)

        if(d > 0)
        {
            document.write(`<p> x1 = ${x[0]} </p>`)
            document.write(`<p> x2 = ${x[1]} </p>`)
        }
        if(d == 0)
        {
            document.write(`<p> x = ${x[0]} </p>`)
        }
        if(d < 0)
        {
            document.write(`<p> ${x[0]} </p>`)
        }

    break

    case 13:
        var a = parseInt(prompt("Введіть суму коштів покладену на дипозит - "),'')
        var b = parseInt(prompt("Введіть відсоткову ставку по дипозиту - "),'')
        var n = parseInt(prompt("Введіть кількість років - "),'')

        var c = deposit(a, b, n)
        document.write(`<p> Отримана сума через ${n} рокік - ${c}грн </p>`)
    break
}