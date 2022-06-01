const Paleontologist = require('../src/gameClass.js')

describe('Test for the park ', () => {
    it('Check player name', () => {
        // set up 
        const paleontologist = new Paleontologist
        
        // execute 
        const result = paleontologist.this.characterStats.name
        // verify
        expect(result).toEqual('Dr Alan Grant')
    })
})