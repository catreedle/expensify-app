// Object destructuring

// const person = {
//     name: 'Simon',
//     age: 28,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher

// console.log(publisherName)

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelpia', 'Pennsylvania', '19147']
// const [, city, state] = address
// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75']

const [ menu, , medium ] = item

console.log(`A medium ${menu} costs ${medium}.`)