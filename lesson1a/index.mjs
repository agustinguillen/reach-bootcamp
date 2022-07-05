import  {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib()

const startingBalance = stdlib.parseCurrency(100)
const accPat = await stdlib.newTestAccount(startingBalance)
const accVanna = await stdlib.newTestAccount(startingBalance)

const ctcPat = accPat.contract(backend)
const ctcVanna = accVanna.contract(backend, ctcPat.getInfo())

const CHALLENGE = ['1', '2', '3', '4', '5', '6']
const OUTCOME = ['Vanna wins', 'Draw', 'Pat wins']
const Player = (Who) => ({
    getChallenge: () => {
        const dice = Math.floor(Math.random()*6)
        console.log(`${Who} played ${CHALLENGE[dice]}`)
        return dice
    },
    seeResult: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
})

await Promise.all([
    ctcPat.p.Pat({
        ...Player('Pat')
    }),
    ctcVanna.p.Vanna({
        ...Player('Vanna')
    })
])