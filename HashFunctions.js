let character = {
    age: 20,
    name: "Harry Potter",
    muggle: false,
    patronus: function() {
        console.log("Expecto Patronum!");
    }
};

character.age; // 20 // O(1)
character.levitate = "Wingardium Leviosa!"; // O(1)
character.patronus(); // Expecto Patronum! // O(1)