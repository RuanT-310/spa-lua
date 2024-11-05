export class Media {
    constructor(notas=[]) {
        this.notas = notas
    }

    maior() {
        return Math.max(...this.notas)
    }

    menor() {
        return Math.min(...this.notas)
    }

    media() {
        return (this.notas.reduce((soma, value) => soma+value)) / this.notas.length
    }
}