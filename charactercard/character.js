const character = {
    name: "Swamp Beast Hero",
    class: "Warrior",
    level: 1,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent = this.name + " has died.";
        } else {
            document.getElementById("message").textContent = this.name + " was attacked!";
        }

        displayCharacter();
    },

    levelUp: function() {
        this.level += 1;
        document.getElementById("message").textContent = this.name + " leveled up!";
        displayCharacter();
    }
};

function displayCharacter() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
}

document.getElementById("attackButton").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelButton").addEventListener("click", () => {
    character.levelUp();
});

displayCharacter();