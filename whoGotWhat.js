const dishes = [
    {name: "Soup Dumplings", eaters: ["Jordan", "Andy", "Dan", "Raf"], price: 96},
    {name: "Beef Fried Udon", eaters: ["Jordan", "Andy", "Dan", "Raf"], price: 17},
    {name: "Scallion Pancake", eaters: ["Raf"], price: 8},
    {name: "Diet Coke", eaters: ["Raf"], price: 2.5},
    {name: "Coke", eaters: ["Andy"], price: 2.5},
]

const people = [{name: "Jordan", total: 0},{name: "Dan", total: 0},{name: "Raf", total: 0},{name: "Andy", total: 0}]

people.forEach((person) => {
    dishes.forEach((dish) => {
        if (dish.eaters.includes(person.name) === true){
            person.total+=dish.price/dish.eaters.length
        }
    })
})

console.log(people)