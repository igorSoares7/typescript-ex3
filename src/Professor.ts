export class Professor{
    nome:string;
    idade:number;
    materia:string

    constructor(nome:string, idade:number, materia:string){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia
    }

    apresentar():string{
        const apresentacao = `Olá! meu nome é ${this.nome}, tenho ${this.idade} anos e dou aula de ${this.materia}`
        return apresentacao
    }

    editarCurso():boolean{
        return true
    }
}