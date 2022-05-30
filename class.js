class Player {
    constructor(name, location, health, voltage) {
        this.name = name,
        this.location = location,
        this.health = health,
        this.canTakeVoltage = voltage
    }

    lose10() {
        return this.health - 10
        
    }
    
    // function attack() {
    //     if (palentologist.health <= 200 && palentologist.health >= 50) {
    //         numAttacks = 0
    //         totalDamage = 0
    //         console.log('LOOK OUT!')
    //         attacker = dinosaurs[Math.floor(Math.random()*dinosaurs.length)];
    
    //         for (let i = 1; i <= Math.floor(Math.random() * 5) + 1; i++) {
    //             numAttacks++
    //             damage = Math.floor(Math.random() * 5) +1
    //             totalDamage += damage 
                
    //             console.log('Single Attack Damage = ' + damage)
    //         };
        
    //         console.log(`${attacker} Attacks ${numAttacks} times! And does ${totalDamage} total damage!`)
    //         console.log('Current Health = ' + (palentologist.health -= totalDamage))
    //     } else {
    //         console.log(`Hidden in tree...enjoys a twix`)
    //     }
    // }
}

const player1 = new Player('Dr Alan Grant', 'Isla Sorna', 100, 49999)
console.log('Starting health = ' +  player1.health)
console.log('After attack health = ' + player1.lose10())
console.log('Health = ' +  player1.health)



