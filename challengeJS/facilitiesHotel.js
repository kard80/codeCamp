const preferences = ['Private bathroom', 'TV', 'WiFi', 'Air conditioning'];

const rooms = [{
    name: 'Standard',
    facilities: ['Private bathroom', 'TV']
}, {
    name: 'Deluxe',
    facilities: ['Private bathroom', 'TV', 'WiFi', 'Air Conditioning']
}, {
    name: 'Super deluxe',
    facilities: ['Private bathroom', 'TV', 'WiFi', 'Air Conditioning', 'Mountain View']
}, {
    name: 'Bungalow',
    facilities: ['Private bathroom', 'TV', 'Mountain view',]
}, {
    name: 'Villa',
    facilities: ['Spa', 'Private bathroom', 'TV', 'WiFi', 'Air Conditioning']
}
]

let answer = preferences.every(item => rooms.includes(item))
let check = preferences.every(item => {console.log(item)})


// for (let i = 0; i < preferences.length; i++) {
//     if(room[1].facilities.includes(preference)) {
//         answer.push(rooms[1].name)
//     }
// }

// console.log(check)