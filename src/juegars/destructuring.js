// const person = {
//     name: 'gabs',
//     age: '21',
//     location: {
//         city: 'Raftel',
//         temp: 49
//     }
// };

// const {name: firstName = 'Anonimo', age} = person; //lo que hace en anonimo es que es un defaul cuando no exista nombre 
// console.log(`${firstName} is ${age}`);

// const {city, temp: tempeture} = person.location
// if(city && tempeture){
//     console.log(`Esta a ${tempeture} in ${city}`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

//array destructuring

const address = ['alamos','Lima','cortes','504'];
const [ street, city, state ='new york', zip ] = address;
console.log(`you are in ${city} ${state}`);

const item = ['Coffe', '$2.00', '$2.50','2.75'];
const [cafe, ,precio] = item;
console.log(`A medium ${cafe} cost ${precio}`);
