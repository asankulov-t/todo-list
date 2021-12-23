import {ActionType, calculator, sum} from "./reducer";


test('sum',()=>{
    //1-test data
    const num1=10;
    const num2=12;
    //2-done test code
    const res=sum(num1,num2)
    //3-сравнение с ожидаемым результатом
    expect(res).toBe(22)
})
test('sum of calc',()=>{
    //1-test data
    const num1=10;
    const num2=12;
    // conts calcul:ActionType={
    //     type:'SUM',
    //     number:num2
    // }
    //2-done test code
    const res=calculator(num1,{type:'MULT',number:num2})
    //3-сравнение с ожидаемым результатом
    expect(res).toBe(120)
})
test('sum of calc',()=>{
    //1-test data
    const num1=10;
    const num2=12;
    // conts calcul:ActionType={
    //     type:'SUM',
    //     number:num2
    // }
    //2-done test code
    const res=calculator(num1,{type:'SUB',number:num2})
    //3-сравнение с ожидаемым результатом
    expect(res).toBe(-2)
})
test('sum of calc',()=>{
    //1-test data
    const num1=10;
    const num2=2;
    // conts calcul:ActionType={
    //     type:'SUM',
    //     number:num2
    // }
    //2-done test code
    const res=calculator(num1,{type:'DIV',number:num2})
    //3-сравнение с ожидаемым результатом
    expect(res).toBe(5)
})
