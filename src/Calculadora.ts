export class Calculadora {
   
    somar(num1:number, num2:number):number{
        return num1 + num2
    }
    subtrair(num1:number, num2:number):number{
        return num1 - num2
    }
    multiplicar(num1:number, num2:number):number{
        return num1 * num2
    }
    dividir(num1:number, num2:number):number|string{
        if(num1 <= 0 || num2 <= 0) return "Número inválido"
        return num1 / num2
    }
    

}


const calculadora = new Calculadora()

console.log(calculadora.somar(2,3))
console.log(calculadora.subtrair(5,5))
console.log(calculadora.multiplicar(3,5))
console.log(calculadora.dividir(30,2))
console.log(calculadora.dividir(10,0))
console.log(calculadora.dividir(0,30))