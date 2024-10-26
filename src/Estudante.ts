export class Estudante {
    nome:string;
    idade:number;
    curso:string

    constructor(nome:string, idade:number, curso:string){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar():string{
     const apresentacao = `Olá! Me chamo ${this.nome}, tenho ${this.idade} e estudo ${this.curso}`
     return apresentacao
    }

    editarCurso():boolean{
        return false
    }
}
