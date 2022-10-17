import { pizzas } from "./objectPizzas.js";

const objPizzas = pizzas;



const divContainer = document.getElementById('renderPizza');
const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn_search');


const operationPizza = () =>{

  let arrayPizza =  [];
 


  /* 1- Encuentro la pizza seleccionada por su id */
  const idPizza = Number(input.value)

  const findPizza = objPizzas.find(pizza => pizza.id === idPizza)
  //console.log(findPizza)


  /* 2- Pusheo el nombre y el precio al array vacio*/
  arrayPizza.push({pizza:findPizza.pizza, price:findPizza.precio})
  //console.log(array)



  /* 3- Crear el elemento a renderizar con los datos del array */
  const createPizza = dataPizza =>  `
  <div class="container">
    <h2 class="namePizza">${dataPizza.pizza} 🍕</h2>
    <h3 class="pricePizza">$${dataPizza.price}</h3> 	
  </div>
  `
    

  
  /*  4- Mostrar elemento en el DOM */
  //Recordatorio: paintPizza(pizzas) = paintPizza(arrayPizza)
  const paintPizza = (pizzas) =>{

    //Mapeo el array
    divContainer.innerHTML = pizzas.map(pizza => createPizza(pizza)).join('')
    
    console.log(divContainer)
  }

  input.value = '';
  
  paintPizza(arrayPizza)


}



//Errores
const emptyInputError= () =>{

  divContainer.innerHTML =  ` 
  <div class='error_container'>
    <span class='errorId'>No se ingresó un Id</span>
  </div> 
  `
}

const idError= () =>{
  divContainer.innerHTML =  ` 
  <div>
    <span class='errorId2'>No existe el id ${input.value}</span>
  </div> 
  `
}



btnSearch.addEventListener('click',e =>{
  e.preventDefault()

  if(input.value == ''){
    emptyInputError()
    
  }
  else if(input.value <= 0 || input.value > 6){
    idError()
    input.value = ''
  }
  else{
    operationPizza()
  }
})
