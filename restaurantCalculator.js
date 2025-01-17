const values = [28.25, 28.25, 30.75, 38.75]
//values are pre-tip and tax
const names = ["Jordan", "Dan", "Andy", "Raf"]
//should be a name for each value so value[index] belongs to name[index]

const calculator = () => {
    for (let i = 0; i < values.length; i++){
        let afterTaxAndTip = Math.round((values[i] + (values[i] * 0.08875) + (values[i] * 0.204920635)) * 100)/100
        console.log(`${names[i]}: ${afterTaxAndTip}`)
    }
}

calculator()