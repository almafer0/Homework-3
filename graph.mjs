class BaseShape {
    constructor(colorName = 'black') {
        this.colorName = colorName
    }
    print () {
        console.log('Not implemented in Base class')
    }
}
// класс Circle расширяет (наследует) класс BaseShape
class Circle extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, r = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.r = r
    }
    print () {
        console.log(`Circle {x0 = ${this.x0}, y0 = ${this.y0}, r = ${this.r}}`)
    }
}

class Rectangle extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, width = 1, height = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.width = width
        this.height = height
    }
    print () {
        console.log(`Rectangle {x0 = ${this.x0}, y0 = ${this.y0}, width = ${this.width}, height = ${this.height}}`)
    }
}

class Triagle extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, a = 1, b = 1, c = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.a = a
        this.b = b
        this.c = c
    }
    print () {
        console.log(`Triagle {x0 = ${this.x0}, y0 = ${this.y0}, a = ${this.a}, b = ${this.b}, c = ${this.c}}`)
    }
}

class Trapeze extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, a = 1, b = 1, c = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.a = a
        this.b = b
        this.c = c
    }
    print () {
        console.log(`Trapeze {x0 = ${this.x0}, y0 = ${this.y0}, a = ${this.a}, b = ${this.b}, c = ${this.c}}`)
    }
}
function demo () {
    [new Circle(), new Rectangle(), new Triagle(), new Trapeze()].forEach(shape => shape.print())
}

export {Circle, Rectangle, Triagle, Trapeze} // экспорт нескольких составляющих модуля
export default demo // экспорт одной, самой главной составляющей модуля