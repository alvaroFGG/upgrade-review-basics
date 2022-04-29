const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

let sumTotal = 0;
let cont = 0;
for(let i of users){
    let sum = 0;
    for(let j in i.favoritesSounds){
        sum += i.favoritesSounds[j].volume;

        sumTotal += i.favoritesSounds[j].volume;
        cont++;
    }
    let media = sum/3;
    console.log('La media de volumen de: ',i.name,' es: ',media);
}

let mediaTotal = sumTotal/cont;

console.log("La media total es de: ",mediaTotal);