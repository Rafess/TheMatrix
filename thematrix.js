const clients = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const makeString = (arr) => {
    let oldEnough = arr.filter(client => client.age >= 18).map(client => `${client.name} can go to The Matrix`); 
    let underAge = arr.filter(client => client.age < 18).map(client => `${client.name} is under age!!`);
    return [...oldEnough, ...underAge];
}

makeString(clients)