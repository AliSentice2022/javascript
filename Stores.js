const elfMethodsStore = {
    attack() {
        return `attack with ${this.weapon}`;
    },
    say() {
        return `Hi, my name is ${this.name}, I am a ${this.type} elf.`;
    }
};

function createElf(name, type, weapon) {
    return {
        name: name, // old way
        type, // with ES6 assignment, if they are the same name
        weapon
    };
}

// each method has to be assigned to the store method to
// create the __proto__ chain
const dobby = createElf("Dobby", "house", "cloth");
dobby.attack = elfMethodsStore.attack;
dobby.say = elfMethodsStore.say;

const legolas = createElf("Legolas", "high", "bow");
legolas.attack = elfMethodsStore.attack;
legolas.say = elfMethodsStore.say;