
const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {  
    let pos = 0;
    if(array.includes(text)){
        return "Esa palabra esta en la posicion: "+array.indexOf(text);
    }else{
        return "Esa palabra no esta en la tabla";
    }
}

console.log(findArrayIndex(array, "Mosquito"));