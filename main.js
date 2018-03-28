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
	pokemonGet (name) {
	var result = '';
	for (let i in name) {
		if (name.hasOwnProperty(i)) {
			result += name
		}
	return pokemon;
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

// have a method named get
// accepts 1 parameter called name
// returns a Pokemon object housing information for the pokemon it found



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
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	defense = data.stats[0].base_stat	
		
		let newPokemon = new Pokemon (name,sprites,hp,attack,abilities,defense);
		gunn.add(newPokemon);

		let newDiv = $('<div></div>');

		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ' and' + ' ' + abilities1 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('#col-1 .front').append(newDiv);

		// window.fadeIn = function (obj) {
		// 	$(obj).fadeIn(2000);
		// }
		// $(".card-image").on("click", "col-1", function () {
		// 	$(this).fadeTo('slow', 0.5);

	}
});
};

	// window.addEventListener('click', function() {
	// 	$("#card").flip();
	// });

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
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	abilities2 = data.abilities[2].ability.name
		let	defense = data.stats[3].base_stat

		let newPokemon = new Pokemon (name,sprites,hp,attack,abilities,defense);
		gunn.add(newPokemon);

		let newDiv = $('<div></div>');

		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ',' + ' ' + abilities1 + ' and' + ' ' + abilities2 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('#col-2 .front').append(newDiv);
	}
});
};


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
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	abilities2 = data.abilities[2].ability.name
		let	defense = data.stats[0].base_stat	

		let newPokemon = new Pokemon (name,sprites,hp,attack,abilities,defense);
		gunn.add(newPokemon);
		
		let newDiv = $('<div></div>');


		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ', ' + ' ' + abilities1 + ' and' + ' ' + abilities2 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('#col-3 .front').append(newDiv);

	}
	});
};

getVulpix();
getSteelix();
getRhydon();
	

