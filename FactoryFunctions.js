function createElf(name, type, weapon) {
    return {
        name: name,
        type: type,
        weapon: weapon,
        say() {
            return `Hi, my name is ${name}, I am a ${type} elf.`;
        },
        attack() {
            return `${name} attacks with ${weapon}`;
        }
    };
}

const dobby = createElf("Dobby", "house", "cloth");
const legolas = createElf("Legolas", "high", "bow");

dobby.say(); // Hi, my name is Dobby, I am a house elf.
legolas.say(); // Hi, my name is Legolas, I am a high elf.
dobby.attack(); // Dobby attacks with cloth.
legolas.attack(); // Legolas attacks with bow.