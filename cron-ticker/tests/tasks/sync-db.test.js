import syncDb from "../../tasks/sync-db.js"
import { describe, test} from '@jest/globals';

describe('Test in sync-db', ()=>{
    test('should execute the process 2 times per call', () => {
        const [_, task] = syncDb
        
        let currentTimes = 1
        let times

        Array(2).fill(null).forEach(()=>{
            currentTimes++
            times = task()
        })
        
        expect( currentTimes ).toBe( times )

     })
})