// create 3 separate cards - start with one
// main document + ajax call
// create new divs to hold  pokemon info - image, ability, hp etc 
// create event listener - card will flip when clicked. other side will have another picture and show details. click again and it flips back / or refresh page and it goes back to main page
// add trainer name - 'gunn'
// link to github

class Trainer {
	constructor() {
		this.pokemon = [];
	}
	add(newPokemon) {
		this.pokemon.push(newPokemon);
	}
	getPokemon(name) {

	for (let i=0; i<this.pokemon.length; i++) {
		if (name.name == this.pokemon[i].name) {
		
		let newDiv = $('<div></div>');
		let column = `#col-${i + 1} .front`;
		let abilitiesDiv = $('<div class="abilities">ABILITIES:</div>');

		$(newDiv).append('<div class="name">' + 'NAME: ' + this.pokemon[i].name + '    ' +  '#37' + '</div>');
		$(newDiv).append(`<img class="sprites" src='${this.pokemon[i].sprites}'>`);
		$(newDiv).append('<div class="hp">' + 'HP: ' + this.pokemon[i].hp + '   ' + '</div>');
		$(newDiv).append('<div class ="attack">' + 'ATTACK: ' + this.pokemon[i].attack +  '  ' + '</div>');

		console.log(this.pokemon[i])
		for (let j=0; j<this.pokemon[i].abilities.length; j++) {
			$(abilitiesDiv).append('<div>' + this.pokemon[i].abilities[j].ability.name + '</div>');
		}
		$(newDiv).append(abilitiesDiv);
		$(newDiv).append('<div class ="defense">' + 'DEFENSE: ' + this.pokemon[i].defense + '  ' + '</div>');
	
		$(column).append(newDiv);
		}
	}
	
}
}

class Pokemon {
	constructor (name, sprites, hp, attack, abilities, defense) {
		this.name = name,
		this.sprites = sprites,
		this.hp = hp,
		this.attack = attack,
		this.abilities = abilities,
		this.defense = defense
	}
}

function displayAll() {
	for(let i=0; i < this.pokemon.length; i++) {
		console.log(this.pokemon[i])
	}
}

let gunn =  new Trainer;

let getVulpix = function () {
	
	$.ajax({
	url:'https://pokeapi.co/api/v2/pokemon/vulpix/' ,
	dataType: 'json',
	method: 'GET',
	success: function(data) {
		// console.log(data);

		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[5].base_stat
		let	attack = data.stats[0].base_stat
		let newAbilities = data.abilities;
		let	defense = data.stats[0].base_stat	
		
		let newPokemon = new Pokemon (name,sprites,hp,attack,newAbilities,defense);
		gunn.add(newPokemon);
		gunn.getPokemon(newPokemon);
		
	}
});
};

	
let getSteelix = function () {
	
	$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/steelix/",
	dataType: 'json',
	method: 'GET',
	success: function(data) {
  	// console.log(data);

		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[5].base_stat
		let	attack = data.stats[4].base_stat
		let newAbilities = data.abilities;
		let	defense = data.stats[3].base_stat

		let newPokemon = new Pokemon (name,sprites,hp,attack,newAbilities,defense);
		gunn.add(newPokemon);
		gunn.getPokemon(newPokemon);
		
	}
});
};
// window.addEventListener('click', function() {
	// 	$("#card").flip();
	// });
let getRhydon = function () {

	$.ajax({
	url:'https://pokeapi.co/api/v2/pokemon/rhydon/',
	dataType: 'json',
	method: 'GET',
	success: function(data) {
  	// console.log(data);
		
		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[0].base_stat
		let	attack = data.stats[0].base_stat
		let newAbilities = data.abilities;
		let	defense = data.stats[0].base_stat	
		let newPokemon = new Pokemon (name,sprites,hp,attack,newAbilities,defense);
		
		gunn.add(newPokemon);
		gunn.getPokemon(newPokemon);
		
		let newDiv = $('<div></div>');

	}
	});
};

getVulpix();
getSteelix();
getRhydon();
	

