import { Media } from "./main.js";

const notas = [8, 5, 7, 8, 9, 10, 3, 5]

const media = new Media(notas)

console.log(
    `maior nota: ${media.maior()}\n
    menor nota: ${media.menor()}\n
    media das notas: ${media.media()}\n
    notas: ${media.notas}`,
)
