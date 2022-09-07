const pizzas = [
  {
    id:1,
    pizza:'Mozzarella',
    ingredientes: ['queso mozzarella','aceitunas'],
    precio: 500
  },

  {
    id:2,
    pizza:'Margarita',
    ingredientes: ['albahaca','tomate'],
    precio: 650
  },

  {
    id:3,
    pizza:'Pepperoni',
    ingredientes: ['pepperoni','tomate','queso'],
    precio: 750
  },

  {
    id:4,
    pizza:'Napolitana',
    ingredientes: ['alcaparras','anchoas','ajo'],
    precio: 1300
  },

  {
    id:5,
    pizza:'Fugazza',
    ingredientes: ['cebolla','queso','aceitunas'],
    precio: 700
  },

  {
    id:6,
    pizza:'Neoyorquina',
    ingredientes: ['verduras','carne','jamon'],
    precio: 1200
  }
];

const impar = [];
const pizzaBarata = [];
const preciosPizzas = [];
const ingredientesPizza = [];


const dataPizza = pizzas.map(item =>{

  if(item.id % 2 !== 0){
    impar.push(item.id);
  }
  
  if(item.precio < 600){
    pizzaBarata.push(item.pizza);
  }

  if(preciosPizzas){
    preciosPizzas.push(` ${item.pizza} $${item.precio}`);
  }


  if(ingredientesPizza){
    ingredientesPizza.push(`Los ingredientes de la pizza ${item.pizza} son:${item.ingredientes}. `);
  }
});

const ingredientes = ingredientesPizza.join('');


console.log(`Las pizzas con id impar: ${impar}`);

console.log(`La pizza menor a $600 es: ${pizzaBarata}`);

console.log(`Lista de precios: ${preciosPizzas}`);

console.log(ingredientes);











