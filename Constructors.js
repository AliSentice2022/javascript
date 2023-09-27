// constructor functions are typically capitalized
function Elf(name, type, weapon) {
    // not returning anything
    // "constructing" a new elf
    this.name = name;
    this.type = type;
    this.weapon = weapon;
}

// to use a constructor function
// the "new" keyword must be used
const dobby = new Elf("Dobby", "house", "cloth");
const legolas = new Elf("Legolas", "high", "bow");

// To add methods we need to add
Elf.prototype.attack = function() {
    // cannot be an arrow function
    // this would be scoped to the window obj
    return `attack with ${this.weapon}`;
};
// This would need to be repeated for each method.

dobby.attack(); // attack with cloth
legolas.attack(); // attack with bow



// What happens under the hood...
const Elf = new Function(
    'name',
    'type',
    'weapon',
    // the \ n just creates a new line
    // it can be ignored here
    this.name = name,
    this.type = type ,
    this.weapon = weapon`
    )
    
    const dobby = new Elf('Dobby', 'house', 'cloth')
    // This will work the same as our code above.