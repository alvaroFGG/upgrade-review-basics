const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

const categorys = [];
for(let i of movies){
    for(let j of i.categories){
        if(!categorys.includes(j)){
            categorys.push(j);
        }
    }
}

console.log(categorys);