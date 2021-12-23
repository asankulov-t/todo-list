// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((a,b)=>{return a+b},0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    let number=a;
    if (number==b&&number==c){
        return "10"
    }
    if (number<=b&&number<c){
        return "01"
    }
    if (number==b&&number>c){
        return "01"
    }
    if (number<b&&number>c){
        return '11'
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    let numbers=number.toString().split('')
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return numbers.reduce((a,b)=>{return Number(a)+Number(b)},0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let ev = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            ev = ev + arr[i]
        } else {
            odd = odd + arr[i]
        }
    }
    let res = ev > odd

    return res
}
// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел,
// котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let s=array.filter(m=>m%2==0&&m>0)
    let n= [];
    for (let i=0;i<s.length;i++){
        n.push(s[i]*s[i])
    }
    return n
}

// 6. Функция принимает параметром целое не отрицательное число
// N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let nums=0;
    for (let i=0;i<=N;++i){
        nums=nums+i
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}