

class Trainer {
	constructor() {
		this.pokemon = [];
	}
	add(newPokemon) {
		this.pokemon.push(newPokemon);
	}
	pokemonGet (name) {
	var result = '';

	for (i = 0; i < this.pokemon.length; i++) {
		if (name == this.pokemon[i].name) {
			return this.pokemon[i];
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


let gunn =  new Trainer();

let getPokemon = function (pokemonId) {
	
	$.ajax({
	url:'https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/' ,
	dataType: 'json',
	method: 'GET',
	success: function(data) {
		let name = data.name;
		let	sprites = data.sprites.front_default;
		let	hp = data.stats[5].base_stat;
		let	attack = data.stats[4].base_stat;
		let abilities2 = data.abilities;
		// console.log(abilities2)
		let abilitiesList = [];
		console.log("test3");
		for (j=0; j<abilities2.length; j++) {
			abilitiesList.push(abilities2[j].ability.name);
			console.log("test4");
			// console.log(abilities2[j].ability.name);
			// return abilities2[j].ability.name;
			console.log(abilitiesList);
			return abilitiesList;

		}
		console.log(abilitiesList);
		console.log("test5");
		let abilitiesNew = abilitiesList.join(", ");
		// let	abilities = data.abilities[0].ability.name
		// let	abilities1 = data.abilities[1].ability.name
		let	defense = data.stats[3].base_stat	
		
		let newPokemon = new Pokemon (name,sprites,hp,attack,defense,abilitiesNew);
		gunn.add(newPokemon);

		let newDiv = $('<div></div>');
		console.log(name);
		$(newDiv).append('<div class="name">' + 'Name: ' + name + '    ' +  '#' + pokemonId + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + 'HP: ' + hp + '   ' + '</div>');
		$(newDiv).append('<div class ="attack">' + 'Attack: ' + attack +  '  ' + '</div>');
		$(newDiv).append('<div class ="abilities">' + 'Abilities: ' + abilitiesNew + ' and' + ' ' +  +'</div>');
		$(newDiv).append('<div class ="defense">' + 'Defense: ' + defense + '  ' + '</div>');
		
		$('#col-1 .front').append(newDiv);
	}
});

};


getPokemon(37);
getPokemon(208);
getPokemon(112);





