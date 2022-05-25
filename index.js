const palentologist = {
    name: 'Dr Alan Grant',
    Location: 'Isla Sorna',
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

console.log(`Weclome to Beautiful ${palentologist.Location}`) 

console.log(palentologist.name + ' - Starting health ' + palentologist.health)

function attack() {
    if (palentologist.health <= 200 && palentologist.health >= 50) {
        numAttacks = 0
        totalDamage = 0
        console.log('LOOK OUT!')
        attacker = dinosaurs[Math.floor(Math.random()*dinosaurs.length)];
    
        for (let i = 1; i <= Math.floor(Math.random() * 5) + 1; i++) {
            numAttacks++
            damage = Math.floor(Math.random() * 5) +1
            totalDamage += damage 
            displayHealth.updateHealth();
            displayName.updateName();
            console.log('Single Attack Damage = ' + damage)

            // if ((Math.floor(Math.random() * 5) + 1) >= 2) {
            //     palentologist.health += 1
            //     console.log(palentologist.health + ' if health')
            //     return `got a health pack`
            // }    
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

// console.log(attack())
// console.log(attack())
// console.log(attack())
// console.log(addHealth())
// console.log(attack())
// console.log(attack())
// console.log(attack())
// console.log(addHealth(5))
// console.log(attack())
// console.log(attack())
// console.log(attack())
// console.log(attack())

console.log('Final Health = ' + palentologist.health)

// function attack() {
//     if (health <= 100) {
//         for (let i = 0; i < 5; i++) {
//         return health = health - 1
//         //log each attack
//         console.log(health + ' Lost')
//     }
// }}

// console.log('Total Health at end = ' + health)
// attack()