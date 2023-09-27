const elf1 = {
    name: 'Dobby',
    type: 'house',
    weapon: 'cloth',
    say: function() {
        return `Hi, my name is ${this.name}, I am a ${this.type} elf.`
    },
    attack: function() {
        return `attack with ${this.weapon}`
    }
}

const elf2 = {
    name: 'Legolas',
    type: 'high',
    weapon: 'bow',
    say: function() {
        return `Hi, my name is ${this.name}, I am a ${this.type} elf.`
    },
    attack: function() {
        return `attack with ${this.weapon}`
    }
}

elf1.attack()
// attack with cloth
elf2.attack()
// attack with bow