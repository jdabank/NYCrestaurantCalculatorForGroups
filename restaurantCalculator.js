const totalBill = 163
//how much you paid total
const afterTax = 137.18
//how much you paid before tip
const values = [28.25, 28.25, 30.75, 38.75]
//values are pre-tip and tax
const names = ["Jordan", "Dan", "Andy", "Raf"]
//should be a name for each value so value[index] belongs to name[index]
const tax = (afterTax/values.reduce((a, b) =>  a + b, 0)) - 1
const tip = (totalBill - values.reduce((a, b) =>  a + b, 0) * tax)/values.reduce((a, b) =>  a + b, 0) - 1

const calculator = () => {
    for (let i = 0; i < values.length; i++){
        let afterTaxAndTip = Math.round((values[i] + (values[i] * tax) + (values[i] * tip)) * 100)/100
        console.log(`${names[i]}: ${afterTaxAndTip}`)
    }
}

calculator()
