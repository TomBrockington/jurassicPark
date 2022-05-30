const palentologist = {
    name: 'Dr Alan Grant',
    location: 'Isla Sorna',
    health: 100,
    canTakeVoltage: 49999
}

const dinosaurs = [
    'T-Rex', 
    'Bronte-Sisters-ours',
    'Teradactyle the silent killer',
    'Barney',
    'Cera'
]

console.log(`Weclome to Beautiful ${palentologist.location}`) 

console.log(palentologist.name + ' - Starting health ' + palentologist.health)

let displayHealth = {
    updateHealth: function() {
        document.getElementById("health").innerHTML = palentologist.health;
    },
}
let displayName = {
    updateName: function() {
        document.getElementById("name").innerHTML = palentologist.name;
    },
}
let displayVoltage = {
    updateVoltage: function() {
        document.getElementById("voltage").innerHTML = palentologist.canTakeVoltage;
    },
}
let displayLocation = {
    updateLocation: function() {
        document.getElementById("location").innerHTML = palentologist.location;
    },
}

function initialState() {
    displayHealth.updateHealth();
    displayName.updateName();
    displayVoltage.updateVoltage();
    displayLocation.updateLocation();
}

function attack() {
    if (palentologist.health <= 200 && palentologist.health >= 50) {
        numAttacks = 0
        totalDamage = 0
        console.log('LOOK OUT!')
        attacker = dinosaurs[Math.floor(Math.random()*dinosaurs.length)];

        /// find somewhere to initialise these
        displayHealth.updateHealth();
        displayName.updateName();
        displayVoltage.updateVoltage();
        displayLocation.updateLocation();


        for (let i = 1; i <= Math.floor(Math.random() * 5) + 1; i++) {
            numAttacks++
            damage = Math.floor(Math.random() * 5) +1
            totalDamage += damage 
            
            console.log('Single Attack Damage = ' + damage)
        };
    
        console.log(`${attacker} Attacks ${numAttacks} times! And does ${totalDamage} total damage!`)
        return 'Current Health = ' + (palentologist.health -= totalDamage)
    } else {
        alert `Hidden in tree...enjoys a twix`
    }
}

function addHealth() {
    palentologist.health += Math.floor(Math.random() * 5) + 1
    displayHealth.updateHealth();
        if (health > 100) {
            return alert(`Go fight dinos`)
        }
    return ` gained health new health = ${palentologist.health}`

}

console.log('Final Health = ' + palentologist.health)