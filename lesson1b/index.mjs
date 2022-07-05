import  {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib()

const startingBalance = stdlib.parseCurrency(100)
const accBidder = await stdlib.newTestAccount(startingBalance)
const accBuyer = await stdlib.newTestAccount(startingBalance)

const ctcBidder = accBidder.contract(backend)
const ctcBuyer = accBuyer.contract(backend, ctcBidder.getInfo())

const PRODUCTS = [
    {price: 2500, description: "A"},
    {price: 2000, description: "B"},
    {price: 1500, description: "C"},
    {price: 3500, description: "D"},
    {price: 4000, description: "E"},
]

const randomProduct = Math.floor(Math.random()*4)

const Player = (Who) => ({
    seePrice: () => {
        console.log(`${Who} played ${PRODUCTS[randomProduct].price}`)
        return randomProduct
    },
    getDescription: () => {
        return `${PRODUCTS[randomProduct].description}`
    },
})

await Promise.all([
    ctcBidder.p.Bidder({
        ...Player('Bidder')
    }),
    ctcBuyer.p.Buyer({
        ...Player('Buyer')
    })
])