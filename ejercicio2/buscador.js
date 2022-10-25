import { pizzas } from "../objectPizzas.js";

const objPizzas = pizzas;
const divContainer = document.getElementById('renderPizza');
const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn_search');



let localSt = JSON.parse(localStorage.getItem('pizza')) || [] ;


const saveLocalSt = (boxpizza) =>{
  localStorage.setItem('pizza', JSON.stringify(boxpizza))
}

const createPizza = dataPizza =>  `
<div class="container">
  <h2 class="namePizza">${dataPizza.pizza} 🍕</h2>
  <h3 class="pricePizza">$${dataPizza.precio}</h3> 	
</div>
`
  
const paintPizza = (pizzas) =>{
    divContainer.innerHTML = pizzas.map((item)=>createPizza(item)).join('')
  
  console.log(divContainer)
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
//-----------------------------



const operacion = ()=> {
  const idPizza = Number(input.value)
  
  const findPizza = objPizzas.find(pizza => pizza.id === idPizza)
  console.log(findPizza)

  input.value = ''
 

   paintPizza([findPizza])
   saveLocalSt(findPizza)
 
  
}

const evaluar = (e)=>{
  e.preventDefault()
  

  if(input.value == ''){
    emptyInputError()
    
  }
  else if(input.value <= 0 || input.value > 6){
    idError()
    input.value = ''
  }
  else {
   operacion()
  
  }

  
}

const init = () => {

  if(localSt.length === 0){
    divContainer.textContent = ''
   }
   else {
     paintPizza([localSt])
   }
  
  btnSearch.addEventListener('click',evaluar)
}

init()


