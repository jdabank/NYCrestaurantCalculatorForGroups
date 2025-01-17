const totalBill = 163
//how much you paid total
const afterTax = 137.18
//how much you paid before tip
const values = [28.25, 28.25, 30.75, 38.75]
//values are pre-tip and tax
const totalBeforeTipAndTax = values.reduce((a, b) =>  a + b, 0)
const names = ["Jordan", "Dan", "Andy", "Raf"]
//should be a name for each value so value[index] belongs to name[index]
const tax = (afterTax/totalBeforeTipAndTax) - 1
const tip = (totalBill - (afterTax - totalBeforeTipAndTax))/totalBeforeTipAndTax - 1

const calculator = () => {
    console.log("Everyone owes the following:")
    for (let i = 0; i < values.length; i++){
        let afterTaxAndTip = Math.round((values[i] + (values[i] * tax) + (values[i] * tip)) * 100)/100
        console.log(`${names[i]}: ${afterTaxAndTip}`)
    }
    console.log(`You paid ${Math.round(totalBeforeTipAndTax * tax * 100)/100} in tax and ${Math.round(totalBeforeTipAndTax * tip * 100)/100} in tip.`)
    console.log(`You tipped ${Math.round(tip * 10000)/100}%.`)
}

calculator()
