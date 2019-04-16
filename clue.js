//Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          "45",
occupation:   "Entrepreneur"
}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          "26",
ocupation:    "Scientist"
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          "22",
occupation:   "Designer"
}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          "31",
occupation:   "Actor"
}

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          "36",
occupation:   "Socialité"
}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          "62",
occupation:   "Retired Football player"
}
// Weapons

rope = {name: "rope", weight: 10},
knife = {name: "knife", weight: 8},
candlestick ={name: "candlestick", weight: 2},
dumbell = {name: "dumbbell", weight: 30},
poison = {name: "poison", weight: 2},
axe = {name: "axe", weight: 15},
bat = {name: "bat", weight: 13},
troph ={name: "troph", weight: 25},
pistol = {name: "pistol", weight: 20}


// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

// Rooms' Collection
var roomsArray = ["Dinning Room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio"]

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol)


var getCards = {
    roomsArray, 
    weaponsArray,
    charactersArray,
    randomSelector: function(array){
      var max = array.length;
      return array[Math.floor(Math.random() * Math.floor(max))];
    },

//mistery

pickMistery: function(room,weapon,character){
    var mysteryEnvelope = [];
    mysteryEnvelope.push(this.randomSelector(room));
    mysteryEnvelope.push(this.randomSelector(weapon));
    mysteryEnvelope.push(this.randomSelector(character));
    return mysteryEnvelope;
    },
  revealMistery: function(){
    var array = this.pickMistery(this.roomsArray,this.weaponsArray,this.charactersArray);
    return array[2].first_name + " " + array[2].last_name + " killed Mr.Boddy using the " + array[1].name + " in the " + array[0];
  }
  }

getCards.revealMistery();



