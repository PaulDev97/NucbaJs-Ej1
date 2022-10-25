import { pizzas } from "../objectPizzas.js";

const objectPizzas = pizzas

const input = document.querySelector('input');
const containerData = document.querySelector('.card_container');
const btnSub = document.querySelector('.btn_submit')



//Local storage
let localSt = JSON.parse(localStorage.getItem('pizza')) || [];

const saveSt  = (boxPizza) =>{
	localStorage.setItem('pizza',JSON.stringify(boxPizza))
}


//Elemento a renderizar
const elementRender =  pizza => 
`
<div class="card">
 <div class="face front">
	 <img class="img" src="${pizza.img}" alt="">
	 <h3>${pizza.pizza}</h3>
 </div>

 <div class="face back">
	 <h2>${pizza.pizza}</h2>
	 <div class="data_pizza">
		 <h3>Ingredientes:</h3>
		 <span class='listPizza'>
		 <p>${pizza.ingredientes}</p>
		 </span>
		 <div class="price">
		 <span><p>Precio:</p>$${pizza.precio}</span> 
		 </div>
	 </div>
 </div>
</div>
`


//Elemento para mostar en el dom
const pintarPizza = (pizzas) =>{
	containerData.innerHTML = pizzas.map((item)=>elementRender(item))
}


//Encontramos pizza y guardamos en local 
const operacionPizza = () =>{
	
	const inputValue = Number(input.value);

	const findPizza = objectPizzas.find((pizza) => pizza.id === inputValue) 
	console.log(findPizza)

	input.value=''

	pintarPizza([findPizza])
	saveSt(findPizza)
	
}


//Error  Id no existe
const inputErrorId = (id) =>{
	containerData.innerHTML = `
	<div class="errorInput">
		<div class="idError">
				<span>🍕🤷‍♂️</span>
				<p>La pizza con el id ${id} no existe</p>
		</div>
	</div>
	`
}


//Error Input vacio
const emptyInput = () => {
	containerData.innerHTML = `
	<div class="errorInput">
			<div class="emptyInput">
			<span>⚠</span>
			<p>Por favor, ingrese un Id</p>
		</div>
	</div>
	`
}






//Dependiendo del valor del input se ejecuta x funcion
const showResultInput = (e) =>{
	e.preventDefault()

	if(input.value == '' ) {
		emptyInput()
	}
	else if(input.value <= 0 || input.value > 6 ){
		inputErrorId(input.value)
		input.value = ''
	}
	else {
		operacionPizza()
	}
}




const init = () =>{
	if(localSt.length === 0){
		containerData.textContent = ''
	}
	else {
		pintarPizza([localSt])
	}
	btnSub.addEventListener('click',showResultInput)
}

init()



