import { Professor } from "./Professor"
import { Estudante } from "./Estudante"

const joao = new Estudante("João", 28, "Full Stack")
const jeff = new Professor("Jeff", 34, "Full Stack")

console.log(joao.apresentar())
console.log(jeff.apresentar())
console.log(joao.editarCurso())
console.log(jeff.editarCurso())
