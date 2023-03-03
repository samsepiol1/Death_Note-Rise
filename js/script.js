/* global monogatari */

/* imports monogatari */




// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
			<p><a href=''>Info about the characters</p>
			
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
monogatari.action('particles').particles({
	'snow': {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#fff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img\/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 10,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 40,
					'size_min': 0.1,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 6,
				'direction': 'bottom',
				'random': false,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Scenario Writer": "Lucas Matheus",
		"Developer": "Lucas Matheus",
		"Writer": "Lucas Matheus"
	},

	"Special Thanks to": {
		"My parents": ["Mom", "Dad"], 
		"My siblings": ["Brother"],
		"Creators of Death Note": ["Tsugumi Ohba", "Takeshi Obata"]
	}

	

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

	"Introduction": [
		
	],
	'Start': [
		"Loading...",
		"clear",
		{"Input": {
			"Text": "Qual o seu nome?",
			"Validation": function (input) {
				return input.trim().length > 0;
			},
			"Save": function (input) {
				Storage.set ("PlayerName", input);
				storage.player.name = input;
				return true;
			},
			"Warning": "You must enter a name!"
		}},

		"centered All humans will, without exception, eventually die.",
		"centered  After they die, the place they go is MU. (Nothingness)",
		"centered Once dead, they can never come back to life.",
		"e There weren't many at first but little by little, more and more came...",
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		'show image ./Minoru.png center with fadeIn',
		

		//Input de Teste

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
		'm ',
		'm',
		'm',
		'm',
		'm',

		'end'
	],

	'No': [

		'm',

		'show message Help',

		'm',
		'm',
		'end'
	]
});
