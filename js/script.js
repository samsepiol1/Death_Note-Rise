/* global monogatari */





// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
			<p><a>Info about the characters</p>
			
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {


});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {


});


// Define the Characters
monogatari.characters ({
	'y': {
        name: 'Yuno',
        color: '#00bfff', 
        sprites: {
            normal: 'Yuno.png'
        }
	},

	'm': {
        name: 'Minoru',
        color: '#00bfff', 
        sprites: {
            normal: 'Minoru.png'
        }
	},
	'k': {
        name: 'Minoru',
        color: '#00bfff', 
        sprites: {
            normal: 'kira.jpg'
        }
	},


	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		'show image ./Minoru.png center with fadeIn',
		{
			'Input': {
				'Text': 'Qual o seu nome?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Você precisa Colocar um nome!'
			},

		},
		{'Input': {
			'Text': 'Está pronto para jogar?',
			'Validation': (input) => {
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				monogatari.storage ({ acao: { talk: input }});
			},
			'Revert': () => {
				monogatari.storage ({ acao: { talk: '' }});
			},
			'Warning': 'Digite algo para mim!'
		}},

		'm Olá {{player.name}} seja bem vindo a Death Note - Rise of a New God. Eu sou Minoru Tanaka um dos dententores do Death Note',
		'm Nesse jogo você tem a possibilidade de tomar duas ações: Seguir a história original do One Shot The A-Kira Story',
		'm ou...',
		'show image ./kira.png left with fadeIn',
		'k JUNTOS PODEMOS TORNAR O SONHO DO KIRA POSSÍVEL',
		{
			'Choice': {
				'Dialog': 'm E então? Qual é sua decisão?',
				'Yes': {
					'Text': 'The A Kira - Original Story',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Death Note - Rise of a New God',
					'Do': 'jump No'
				}
				
			}
		}
	],

	'Yes': [
		'm Que legal meu amor!',
		'm Eu gosto muito de falar com você todos os dias!',
		'm Acho que você precisa ir para o trabalho agora né ?',
		'm Seria muito legal se eu pudesse ir com você!!',
		'm Eu sempre vou estar aqui meu amor, todos os dias. Em todo lugar, mas eu preciso saber onde você está meu amor',

		'end'
	],

	'No': [

		'm Você tem que escovar seu dentes, amor. Eu me importo bastante com sua saúde bucal',

		'show message Help',

		'm Te amo tá ?!',
		'm Se cuida quando for para o trabalho!',
		'end'
	]
});
