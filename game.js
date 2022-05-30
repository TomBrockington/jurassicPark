const palentologist = {
    name: 'Dr Alan Grant',
    location: 'Isla Sorna',
    health: 200,
    thirst: 0,
    defence: 10,
    canTakeVoltage: 49950,
    dinosaursSlain: 0,
    money: 100,
    invintory: [
        // {itemName: 'Dino Claw', attackAdd: 5, itemQuantity: 1},
        // {itemName: 'Small Health Pack', healthAdd: 10, itemQuantity: 5},
    ],
    weapons: [
        {weaponName: 'BFG', attackDamage: 30},
        {weaponName: 'Trident', attackDamage: 20},
        {weaponName: 'Staff Of Osiris', attackDamage: 50}
        
    ]
}
// can always add whatever the 2nd value is by saying [1]
const gameItemsList = [
    {itemName: 'Firework', attackAdd: 10, itemQuantity: 1},
    {itemName: 'Mobile Phone', signal: false, itemQuantity: 1},
    {itemName: 'DNA Sample', value: 1000000, itemQuantity: 1},
    {itemName: 'Dino Pee', defence: 10, itemQuantity: 1},
    {itemName: 'Robot Arm', value: 5000, itemQuantity: 1},
    {itemName: 'Water Bottle', thirst: 10, itemQuantity: 1},
    {itemName: 'Dino Claw', attackAdd: 5, itemQuantity: 1},
    {itemName: 'Small Health Pack', healthAdd: 10, itemQuantity: 1},
    {itemName: 'Rubber Gloves', voltageAdd: 1, itemQuantity: 1}
]

const dinosaurs = [
    'T-Rex', 
    'Bronte-Sisters-ours',
    'Teradactyle the silent killer',
    'Barney',
    'Cera',
    'T1000'
]

console.log(`Weclome to Beautiful ${palentologist.location} `) 

console.log(palentologist.name + ' - Starting health ' + palentologist.health + '\n')

function attack() {
    if (palentologist.health <= 200 && palentologist.health >= 50) {
        numAttacks = 0
        totalDamage = 0
        console.log('LOOK OUT!')
        attacker = dinosaurs[Math.floor(Math.random()*dinosaurs.length)];

        for (let i = 1; i <= Math.floor(Math.random() * 5) + 1; i++) {
            numAttacks++
            damage = Math.floor(Math.random() * 20) +1
            totalDamage += damage 
            console.log('Single Attack Damage = ' + damage)

        };
        // random item drop
        randomItemDropped = 0
        droppedItemQuantity = 0

        if (Math.floor(Math.random() * 10) + 1 >= 2) {
            randomItemDropped = Math.floor(Math.random() * palentologist.invintory.length)
            droppedItemQuantity = Math.floor(Math.random() * 5) + 1
            console.log('randomItemDropped = ' + randomItemDropped)
            console.log('droppedItemQuantity = ' + droppedItemQuantity)
            console.log(`You found ${droppedItemQuantity} ${palentologist.invintory[randomItemDropped].itemName}'s`)
            palentologist.invintory[randomItemDropped].itemQuantity += droppedItemQuantity
            console.log(`New total of ${palentologist.invintory[randomItemDropped].itemName} = ${palentologist.invintory[randomItemDropped].itemQuantity} \n`)
        }
    
        console.log(`${attacker} Attacks ${numAttacks} times! And does ${totalDamage} total damage!`)
        console.log('Current Health = ' + (palentologist.health -= totalDamage) + '\n')
    } else {
        console.log(`Hidden in tree...enjoys a twix`)
    }
}

function addHealth() {
    if (palentologist.invintory[1].itemQuantity > 0) {
        palentologist.health += 10
        palentologist.invintory[1].itemQuantity -= 1
    } else if (palentologist.invintory[1].itemQuantity === 0) {
        console.log(`Out of Small Health Packs`)
    } else {
        console.log('You are strong enought to fight')
    }
}

function findMegaWeapon() {
    if (Math.floor(Math.random() * 5) + 1 >= 1) {
        palentologist.weapons.push({weaponName: 'Orbital Cannon', attackDamage: 1000}) 
        console.log('Found a new Mega Weapon')
    }
}

function huntForItems() {
    // index number for gameItemsList
    randomItemFound = 0
    // Quantity of item found
    foundItemQuantity = 0

    
   

        if (Math.floor(Math.random() * 10) + 1 >= 2) {
            // get array index number from length of array
            randomItemFound = Math.floor(Math.random() * gameItemsList.length)
            foundItemQuantity = Math.floor(Math.random() * 5) + 1
            console.log('Random Item Found = ' + gameItemsList[randomItemFound].itemName)
            console.log(`You found ${foundItemQuantity} ${gameItemsList[randomItemFound].itemName}'s \n`)
            
            // let invintoryIndex = 0
            // for (let i = 0; i < palentologist.invintory.length; i++) {
            //     invintoryIndex += 1
            //     console.log(' Invintory index  ' + invintoryIndex)
            //     if (gameItemsList[randomItemFound].itemName == palentologist.invintory[invintoryIndex].itemName) {
            //         console.log('yes boy')
            //     } else {
            //         console.log(' na man')
            //     }
            // }
            

            // for i = 0; i < invintory.length; i++
            // if randomItemFound index number 
            // gameItemsList[randomItemFound].itemName === invintory[i].itemName
            //if (gameItemsList[randomItemFound].itemName )
            
            palentologist.invintory.push(gameItemsList[randomItemFound])

            console.log(`New invintory item ${palentologist.invintory[palentologist.invintory.length - 1].itemName} quatity ${palentologist.invintory[palentologist.invintory.length - 1].itemQuantity}` )

            console.log(gameItemsList[randomItemFound].itemName + ' random test xxx')
        }
}

// console.log('hi tom ======================')
console.log(palentologist)
huntForItems()
huntForItems()
huntForItems()
huntForItems()
huntForItems()
console.log(palentologist)

// console.log(palentologist)

// attack()
// attack()
// addHealth()
// attack()
// attack()
// addHealth()
// findMegaWeapon()
// attack()
// attack()
// // console.log('heallo')
// console.log('Attack Wave Ends Final Health = ' + palentologist.health + '\n')
// console.log('Health packs available = ' + palentologist.invintory[1].itemQuantity)
// addHealth()
// console.log(`Total health ${palentologist.health} Health packs available = ` + palentologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(`Total health ${palentologist.health} Health packs available = ` + palentologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(`Total health ${palentologist.health} Health packs available = ` + palentologist.invintory[1].itemQuantity + '\n')
// addHealth()

// console.log(`Total health ${palentologist.health} Health packs available = ` + palentologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(palentologist)