const paleontologist = {
    name: 'Dr Alan Grant',
    location: 'Isla Sorna',
    health: 200,
    thirst: 0,
    defence: 10,
    canTakeVoltage: 49950,
    dinosaursSlain: 0,
    money: 100,
    invintory: [
        {itemName: 'Firework', attackAdd: 10, itemQuantity: 1},
        {itemName: 'Mobile Phone', signal: false, itemQuantity: 1},
        {itemName: 'DNA Sample', value: 1000000, itemQuantity: 1},
        {itemName: 'Dino Pee', defence: 10, itemQuantity: 1},
        {itemName: 'Robot Arm', value: 5000, itemQuantity: 1},
        {itemName: 'Water Bottle', thirst: 10, itemQuantity: 1},
        {itemName: 'Dino Claw', attackAdd: 5, itemQuantity: 1},
        {itemName: 'Small Health Pack', healthAdd: 10, itemQuantity: 1},
        {itemName: 'Rubber Gloves', voltageAdd: 1, itemQuantity: 10}
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

console.log(`Weclome to Beautiful ${paleontologist.location} `) 

console.log(paleontologist.name + ' - Starting health ' + paleontologist.health + '\n')

function attack() {
    if (paleontologist.health <= 200 && paleontologist.health >= 50) {
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
            randomItemDropped = Math.floor(Math.random() * paleontologist.invintory.length)
            droppedItemQuantity = Math.floor(Math.random() * 5) + 1
            console.log('randomItemDropped = ' + randomItemDropped)
            console.log('droppedItemQuantity = ' + droppedItemQuantity)
            console.log(`You found ${droppedItemQuantity} ${paleontologist.invintory[randomItemDropped].itemName}'s`)
            paleontologist.invintory[randomItemDropped].itemQuantity += droppedItemQuantity
            console.log(`New total of ${paleontologist.invintory[randomItemDropped].itemName} = ${paleontologist.invintory[randomItemDropped].itemQuantity} \n`)
        }
    
        console.log(`${attacker} Attacks ${numAttacks} times! And does ${totalDamage} total damage!`)
        console.log('Current Health = ' + (paleontologist.health -= totalDamage) + '\n')
    } else {
        console.log(`Hidden in tree...enjoys a twix`)
    }
}

function addHealth() {
    if (paleontologist.invintory[1].itemQuantity > 0) {
        paleontologist.health += 10
        paleontologist.invintory[1].itemQuantity -= 1
    } else if (paleontologist.invintory[1].itemQuantity === 0) {
        console.log(`Out of Small Health Packs`)
    } else {
        console.log('You are strong enought to fight')
    }
}

function findMegaWeapon() {
    if (Math.floor(Math.random() * 5) + 1 >= 1) {
        paleontologist.weapons.push({weaponName: 'Orbital Cannon', attackDamage: 1000}) 
        console.log('Found a new Mega Weapon')
    }
}

function climbElectricFence() {
    //add canTake and gloves stats together
    totalVoltageProtection = 
    // if invintory name ruuber gloves exist in invintory array 
    // find its quantity and times quantity by volatgeAdd and add to totalVProtect 
    console.log()
}

// I have, ARRAY of OBJ (WITH 3 VALUES) for items to find and an invintory ARRAY 
// A random number selects an index number from gamesItemList
// Check if the itemNames match before adding
// compare names && if quaniity >= 99
// If names match we just want to add the quantity found.
    // add x amount to object y
// that whole object is pushed into the invintory array.

function include() {
    console.log('Starting Invintory ', paleontologist.invintory)

    let indexPosition = 0
    console.log('Starting Index numer ', indexPosition)
    console.log(paleontologist.invintory[1].itemName, 'test xxxx')

    for (let i = 0; i < paleontologist.invintory.length; i++) {
        if (paleontologist.invintory[indexPosition].itemName.includes(paleontologist.invintory[indexPosition].itemName)) {
            console.log('Item found')
            console.log('ind pos ', indexPosition)  
            return
        } else {
            indexPosition +=1
            console.log('No item found')
        }
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

        let indexPosition = 0
        console.log('Starting Index numer ', indexPosition)

        for (let i = 0; i < paleontologist.invintory.length; i++) {
            if (paleontologist.invintory[indexPosition].itemName.includes(paleontologist.invintory[randomItemFound].itemName)) {
                console.log('ind pos ', indexPosition)
                console.log('first quantity', paleontologist.invintory[indexPosition].itemQuantity) 
                paleontologist.invintory[indexPosition].itemQuantity += foundItemQuantity
                console.log('second quantity', paleontologist.invintory[indexPosition].itemQuantity) 
                return
            } else {
                indexPosition +=1
                console.log('No item found')
            }
        } 
    }       
    paleontologist.invintory.push(gameItemsList[randomItemFound])

    console.log(`New invintory item ${paleontologist.invintory[paleontologist.invintory.length - 1].itemName} quatity ${paleontologist.invintory[paleontologist.invintory.length - 1].itemQuantity}` )


    
}

// console.log('hi tom ======================')
// console.log(paleontologist)
huntForItems()
// include()
// console.log(paleontologist)

// console.log(paleontologist)

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
// console.log('Attack Wave Ends Final Health = ' + paleontologist.health + '\n')
// console.log('Health packs available = ' + paleontologist.invintory[1].itemQuantity)
// addHealth()
// console.log(`Total health ${paleontologist.health} Health packs available = ` + paleontologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(`Total health ${paleontologist.health} Health packs available = ` + paleontologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(`Total health ${paleontologist.health} Health packs available = ` + paleontologist.invintory[1].itemQuantity + '\n')
// addHealth()

// console.log(`Total health ${paleontologist.health} Health packs available = ` + paleontologist.invintory[1].itemQuantity + '\n')
// addHealth()
// console.log(paleontologist)