const dishes = [
    {name: "Soup Dumplings", eaters: ["Jordan", "Dan", "Raf", "Andy"], price: 96},
    {name: "Beef Udon", eaters: ["Jordan", "Dan", "Raf", "Andy"], price: 17},
    {name: "Coke", eaters: ["Andy"], price: 2.5},
    {name: "Diet Coke", eaters: ["Raf"], price: 2.5},
    {name: "Scallion Pancake", eaters: ["Raf"], price: 8}
]

const peopleSet = new Set()

dishes.forEach((dish) => {
    dish.eaters.forEach((eater) => {
        peopleSet.add(eater)
    })
})

const names = Array.from(peopleSet)
const people = []

names.forEach((name) => {
    people.push({name: name, total: 0, dishes: []})
})


people.forEach((person) => {
    dishes.forEach((dish) => {
        if (dish.eaters.includes(person.name) === true){
            person.total+=dish.price/dish.eaters.length
            person.dishes.push(dish.name)
        }
    })
    person.total =  Math.round(person.total * 100)/100
})

export default people.sort((a, b) => a.total - b.total)