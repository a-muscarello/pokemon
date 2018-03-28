// create 3 separate cards - start with one
// main document + ajax call
// create new divs to hold  pokemon info - image, ability, hp etc 
// create event listener - card will flip when clicked. other side will have another picture and show details. click again and it flips back / or refresh page and it goes back to main page
// add trainer name - 'gunn'
// link to github


// $(document).ready(function() {
	
	$.ajax({
	url:'https://pokeapi.co/api/v2/pokemon/vulpix/' ,
	type: 'GET',
	success: function(data) {

		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[5].base_stat
		let	attack = data.stats[0].base_stat
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	defense = data.stats[0].base_stat	
		
		let newDiv = $('<div></div>');
		console.log('newDiv');

		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ' and' + ' ' + abilities1 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('.back').append(newDiv);
		
// 		$.ajax({
// 		url:'https://pokeapi.co/api/v2/pokemon/ninetales/',
// 		type: 'GET',
// 		success: function(data) {
		
// 		let name = data.name
// 		let	sprites = data.sprites.front_default
// 		let	hp = data.stats[5].base_stat
// 		let	attack = data.stats[4].base_stat
// 		let	abilities = data.abilities[0].ability.name
// 		let	abilities1 = data.abilities[1].ability.name
// 		let	abilities1 = data.abilities[2].ability.name
// 		let	defense = data.stats[3].base_stat	

// 		let newDiv = $('<div></div>');
// 		console.log('newDiv');

// 		$(newDiv).append('<div class="name">' + name + '</div>');
// 		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
// 		$(newDiv).append('<div class="hp">' + hp + '</div>');
// 		$(newDiv).append('<div class ="attack">' + attack + '</div>');
// 		$(newDiv).append('<div class ="abilities">' + abilities + ' and' + ' ' + abilities1 +'</div>');
// 		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
// 		$('.back').append(newDiv);

	}
});
// steelix 
// $(document).ready(function() {
	
	$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/steelix/",
	// url:'https://pokeapi.co/api/v2/pokemon/' + num,
	type: 'GET',
	success: function(data) {
  	console.log(data);

		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[5].base_stat
		let	attack = data.stats[4].base_stat
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	abilities2 = data.abilities[2].ability.name
		let	defense = data.stats[3].base_stat	
		
		let newDiv = $('<div></div>');
		console.log('newDiv');

		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ',' + ' ' + abilities1 + ' and' + ' ' + abilities2 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('.back').append(newDiv);
		
// 		$.ajax({
// 		url:'https://pokeapi.co/api/v2/pokemon/onix/',
// 		type: 'GET',
// 		success: function(data) {
		
// 		let name = data.name
// 		let	sprites = data.sprites.front_default
// 		let	hp = data.stats[5].base_stat
// 		let	attack = data.stats[4].base_stat
// 		let	abilities = data.abilities[0].ability.name
// 		let	abilities1 = data.abilities[1].ability.name
// 		let	abilities2 = data.abilities[2].ability.name
// 		let	defense = data.stats[3].base_stat	
		
// 		let newDiv = $('<div></div>');
// 		console.log('newDiv');

// 		$(newDiv).append('<div class="name">' + name + '</div>');
// 		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
// 		$(newDiv).append('<div class="hp">' + hp + '</div>');
// 		$(newDiv).append('<div class ="attack">' + attack + '</div>');
// 		$(newDiv).append('<div class ="abilities">' + abilities + ' and' + ' ' + abilities1 +'</div>');
// 		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
// 		$('.back').append(newDiv);
	}
});
		// document.getElementById("card").innerHTML = 'Pokemon';
		

	// document.getElementsByClassName('front').append(steelix)


	// document.getElementsByClassName('back').append(onix)
	

		window.addEventListener('click', function() {
			// document.getElementsByClassName('back').innerHTML = 
			$("#card").flip().append(data.onix);
		});

// rhydon
// $(document).ready(function() {
	
	$.ajax({
	url:'https://pokeapi.co/api/v2/pokemon/rhydon/',
	// url:'https://pokeapi.co/api/v2/pokemon/' + num,
	type: 'GET',
	success: function(data) {
  	console.log(data);
		
		let name = data.name
		let	sprites = data.sprites.front_default
		let	hp = data.stats[0].base_stat
		let	attack = data.stats[0].base_stat
		let	abilities = data.abilities[0].ability.name
		let	abilities1 = data.abilities[1].ability.name
		let	abilities2 = data.abilities[2].ability.name
		let	defense = data.stats[0].base_stat	
		
		let newDiv = $('<div></div>');
		console.log('newDiv');

		$(newDiv).append('<div class="name">' + name + '</div>');
		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
		$(newDiv).append('<div class="hp">' + hp + '</div>');
		$(newDiv).append('<div class ="attack">' + attack + '</div>');
		$(newDiv).append('<div class ="abilities">' + abilities + ', ' + ' ' + abilities1 + ' and' + ' ' + abilities2 +'</div>');
		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
		$('.back').append(newDiv);
		
// 		$.ajax({
// 		url:'https://pokeapi.co/api/v2/pokemon/rhyperior/',
// 		type: 'GET',
// 		success: function(data) {
		
// 		let name = data.name
// 		let	sprites = data.sprites.front_female
// 		let	hp = data.stats[5].base_stat
// 		let	attack = data.stats[4].base_stat
// 		let	abilities = data.abilities[0].ability.name
// 		let	abilities1 = data.abilities[1].ability.name
// 		let	abilities2 = data.abilities[2].ability.name
// 		let	defense = data.stats[3].base_stat	

// 		let newDiv = $('<div></div>');
// 		console.log('newDiv');

// 		$(newDiv).append('<div class="name">' + name + '</div>');
// 		$(newDiv).append(`<img class="sprites" src='${sprites}'>`);
// 		$(newDiv).append('<div class="hp">' + hp + '</div>');
// 		$(newDiv).append('<div class ="attack">' + attack + '</div>');
// 		$(newDiv).append('<div class ="abilities">' + abilities + ' and' + ' ' + abilities1 +'</div>');
// 		$(newDiv).append('<div class ="defense">' + defense + '</div>');
		
// 		$('.back').append(newDiv);

	}
});
		// document.getElementById("card").innerHTML = 'Pokemon';
		
