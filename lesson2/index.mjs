import  {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib()

const startingBalance = stdlib.parseCurrency(100)
const accBidder = await stdlib.newTestAccount(startingBalance)
const accBuyer = await stdlib.newTestAccount(startingBalance)

const fmt = (x) => stdlib.formatCurrency(x, 2);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeBidder = await getBalance(accBidder)
const beforeBuyer = await getBalance(accBuyer)
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
        ...Player('Bidder'),
        payment: stdlib.parseCurrency(2),
    }),
    ctcBuyer.p.Buyer({
        ...Player('Buyer'),
        acceptPayment: (amt) => {
            console.log(`Buyer accepts the payment of ${fmt(amt)}.`)
        }
    })
])

const afterBidder = await getBalance(accBidder);
const afterBuyer = await getBalance(accBuyer);

console.log(`Bidder went from ${beforeBidder} to ${afterBidder}`);
console.log(`Buyer went from ${beforeBuyer} to ${afterBuyer}`);