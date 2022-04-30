const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2){
    [array[index1], array[index2]] = [array[index2], array[index1]];

    return array;
}

console.log(swap(array, 0, 3));