import people from "./whoGotWhat.js"
const totalBill = 163
//how much you paid total
const afterTax = 137.18
//how much you paid before tip
const values = []
const names = []
const dishes = []

const pusher = () => {
    people.forEach((person) => {
        names.push(person.name)
        values.push(person.total)
        dishes.push(person.dishes)
    })
}

const calculator = () => {
    const totalBeforeTipAndTax = values.reduce((a, b) =>  a + b, 0)
    const tax = (afterTax/totalBeforeTipAndTax) - 1
    const tip = (totalBill - (afterTax - totalBeforeTipAndTax))/totalBeforeTipAndTax - 1
    console.log("Everyone owes the following:")
    for (let i = 0; i < values.length; i++){
        let afterTaxAndTip = Math.round((values[i] + (values[i] * tax) + (values[i] * tip)) * 100)/100
        console.log(`${names[i]}: ${afterTaxAndTip}, ${dishes[i].join(", ")}`)
    }
    console.log(`You paid ${Math.round(totalBeforeTipAndTax * tax * 100)/100} in tax and ${Math.round(totalBeforeTipAndTax * tip * 100)/100} in tip.`)
    console.log(`You tipped ${Math.round(tip * 10000)/100}%.`)
}

pusher()
calculator()
