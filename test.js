if (5 > 4) {
    console.log('5 > 4')
    let hats = 0
    for (let i = 0; i < 5; i++) {
        
        console.log(hats + ' hats')
        if (Math.floor(Math.random() * 10) + 1 >= 2) {
            hats += 1
            console.log('1 in 5 chance - 2nd if')
        } else {
            console.log('oh no')
        }
    };
}