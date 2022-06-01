class Paleontologist {
    // construtor to contain all the updatedable character attributes
    constructor() {
        // character
        this.characterStats = {
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
                
            ],
            weapons: [
                {weaponName: 'BFG', attackDamage: 30},
                {weaponName: 'Trident', attackDamage: 20},
                {weaponName: 'Staff Of Osiris', attackDamage: 50}
            ]
        }
        // full list of items
        this.availableItems = [

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

        // attackers 
        this.dinosaurs = [
            'T-Rex', 
            'Bronte-Sisters-ours',
            'Teradactyle the silent killer',
            'Barney',
            'Cera',
            'T1000'
        ]
    }
    //attack function
}
module.export = Paleontologist
// class Paleontologist {
//     constructor() {
//         this.characterStats = [
//             {
//                 name: 'Dr Alan Grant',
//                 location: 'Isla Sorna',
//                 health: 200,
//                 thirst: 0,
//                 defence: 10,
//                 canTakeVoltage: 49950,
//                 dinosaursSlain: 0,
//                 money: 100,
//                 invintory: [
//                     {itemName: 'Firework', attackAdd: 10, itemQuantity: 1},
//                     {itemName: 'Mobile Phone', signal: false, itemQuantity: 1},
//                     {itemName: 'DNA Sample', value: 1000000, itemQuantity: 1},
//                     {itemName: 'Dino Pee', defence: 10, itemQuantity: 1},
//                     {itemName: 'Robot Arm', value: 5000, itemQuantity: 1},
//                     {itemName: 'Water Bottle', thirst: 10, itemQuantity: 1},
//                     {itemName: 'Dino Claw', attackAdd: 5, itemQuantity: 1},
//                     {itemName: 'Small Health Pack', healthAdd: 10, itemQuantity: 1},
//                     {itemName: 'Rubber Gloves', voltageAdd: 1, itemQuantity: 10}
//                 ],
//                 weapons: [
//                     {weaponName: 'BFG', attackDamage: 30},
//                     {weaponName: 'Trident', attackDamage: 20},
//                     {weaponName: 'Staff Of Osiris', attackDamage: 50}
//                 ]
//             }
//         ]
//     }
// }