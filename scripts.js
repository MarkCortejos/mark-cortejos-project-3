const myApp = {}

// only build arrays after page loads
myApp.init = function() {
  myApp.first = [
    'Awesome',
    'Avo',
    'The Ankle-Biter',
    'Beef',
    'Brave',
    'The Backbreaker',
    'Callosum',
    'Cobber',
    'Clarity',
    'Dusk',
    'Devo',
    'Drongo',
    'Easy',
    'Enormous',
    'Extra',
    'Forever',
    'Funky',
    'Flak-Cannon',
    'Frenum',
    'Goon',
    'Greatness',
    'Groot',
    'Hardball',
    'High-Five',
    'Heavy',
    'Iffy',
    'Incog',
    'Intrepid',
    'Knight-Blazer',
    'Knuckles',
    'Killspree',
    'Larp',
    'Longbottom',
    'Legless',
    'Magic',
    'Mighty',
    'Mini',
    'Megas',
    'Nighttime',
    'Nosh',
    'Niddick',
    'Oxy',
    'Orelius',
    'Oshkosh',
    'Pash',
    'Pectoras',
    'Pate',
    'Rakka',
    'Rhinus',
    'Ratchet',
    'The Shepherd',
    'Slabface',
    'Straya',
    'T-Bone',
    'True-Blue',
    'Topknot',
    'Uwie',
    'Uppercut',
    'Uvulis',
    'Valiant',
    'Vivisection',
    'The Voracious',
    'Worm-Master',
    'Wax',
    'Whip',
    'X-Eye',
    'Xeno',
    'Xanthus',
    'Yonkers',
    'Young',
    'The Yakitori',
    'Zygo',
    'Zephyr',
    'Zed'
  ];
  
  myApp.second = [
    'the Awful',
    'Arrow-to-the-Knee',
    'the Brackish',
    'Bigosh',
    'Bonanza',
    'the Cash Crasher',
    'Carcharodon',
    'the Defenestrator',
    'Dauntless',
    'the Excellent',
    'Excelsior',
    'Ferocious',
    'the Freaky',
    'Gorgonzola',
    'the Greasebucket',
    'Hype-Master',
    'the Hunger Monger',
    'Ignition',
    'Initiative',
    'Jackknife',
    'the Jackal',
    'Killjoy',
    'Kerberos',
    'the Laughing',
    'Lift',
    'Mecha',
    'the Massive',
    'Nineballer',
    'Ninja',
    'the Operatic Operator',
    'Orpheus',
    'Pleasant',
    'the Pessimist Specialist',
    'the Quiet',
    'Quiche',
    'Reprobate',
    'the Racer Eraser',
    'Slackjaw',
    'the Sidewinder',
    'Toothcracker',
    'the Turbo Turbot',
    'the Upside-down',
    'Uber',
    'Vital',
    'Vortex',
    'the Wanderer',
    'Wind',
    'X',
    'Xanadu',
    'the Yuppie',
    'Yamato',
    'the Zealot',
    'Zodiac'
  ];
  
  myApp.car = [
    'Armada Prime',
    'Astral Seeker',
    'Big Foot',
    'Bone Wagon',
    'Caltrop #7',
    'Cutthroat of the Wastes',
    'Doof Wagon',
    'Demented One',
    'Extreme Mobile',
    'Eater of Worlds',
    'Fabulous #5',
    'Flashy Flash',
    'Gingerbread Car',
    'Gafelta Fish',
    'Homing Hotdog',
    'Hot Rod Matrix',
    'Infernus Maximus',
    'Initial D',
    'Interceptor V-8',
    'Jackrabbit',
    'Juggernaut',
    'Knight Rider',
    'Khromehound',
    'Lovebug',
    'Laughing Hyena',
    'Magnum Opus',
    'Mach V',
    'Neo Blur',
    'Nova Cat',
    'Orphan #77',
    'Omnimach',
    'Pursuit Special',
    'Phantom Omega',
    'Quick Brown Fox',
    'Quetzalcoatl',
    'Razor Cola',
    'Righteous Indignation',
    'Skullbutt',
    'Sonic Boom',
    'Turbo Max',
    'Trekker Decker',
    'Unlimited Engine Works',
    'Ultra Car',
    'Voodoo',
    'Veteran Virtue',
    'War Rig',
    'Wonder Wulf',
    'X-Guard',
    'Xenocars',
    'Yellow #1',
    'Yokozuna',
    'Z Fighter',
    'Zalgo Cometh'
  ];
}

// given an array, 
  // randomly generate a number based on array length, 0 inclusive
myApp.generateRand = function(array) {
  return Math.floor(Math.random() * array.length);
};

// given a name array, 
  // generates a random name from the passed array and returns it
myApp.randomizeName = function(nameArray) {
  const randNum = myApp.generateRand(nameArray);
  return nameArray[randNum];
};

// given the nameObject, 
  // builds a string from the values in it and display the string
myApp.generateString = function(nameObject) {
  const first = nameObject.first;
  const second = nameObject.second;
  const car = nameObject.car;
  const string =
    `<p class="generated-name">"Leaving your old identity behind, you ride into the bandit-infested wastes as<br> 
      <em>${first} ${second}, driver of the ${car}</em>!"
    </p>`;
  $('.name-container').css('display','block');
  $('.name-container').empty();
  $('.name-container').append(string);
}

// given a text field,
  // gets the first character and returns it
myApp.getFirstChar = function(textField) {
  return textField.val().charAt(0);
}

// given a character and array,
  // filter array based on character inputted and returns a filtered array
  // if the character inputted is not a letter, it will return the unchanged array argument
myApp.filterArrayByCharacter = function (character, nameArray) {
  const filteredArray = [];
  const regex = /^[a-zA-Z]+$/;

  // check if the passed character is a letter,
    // if yes, then filter nameArray by the letter
    // if no, then return the unfiltered array
  if (character.match(regex)) {
    nameArray.forEach( e => {
      // if the name starts with 'the', 
        // skip it and compare the fourth character (after 'the ')
          // push the name to the filtered array if it's a match
      if (e.substr(0,3).toLowerCase() === "the") {
        if (e.charAt(4).toLowerCase() === character.toLowerCase()) {
          filteredArray.push(e);
        };
      // otherwise,
        // compare the first character
          // push the name to the filtered array if it's a match
      } else {
        if (e.charAt(0).toLowerCase() === character.toLowerCase()) {
          filteredArray.push(e);
        };
      };
    });
    return filteredArray;
  } else {
    return nameArray
  }
};

// on form submit,
  // check for checked textboxes to randomize
    // randomize names based on the input in the textbox (if any)
    // don't randomize unchecked textboxes
  // display the names
$('form').on('submit', function(e) {
  e.preventDefault();
  // create an object to hold the generated names
  const generatedNames = {};
  
  // randomize checked textboxes
  if ($('input[type=checkbox]:checked')) {
    const checkedFields = [];
    // grab each value attribute from checked checkboxes and place them in an array
      // solution from https://www.tutorialrepublic.com/faq/how-to-get-the-values-of-selected-checkboxes-in-a-group-using-jquery.php
    $.each($('input[type=checkbox]:checked'), function () {
      checkedFields.push($(this).val());
    });
    
    checkedFields.forEach( e => {
      // get the first character in the text box to use in our filter
      const charForFilter = myApp.getFirstChar($(`input[name=${e}]`));
      // get a filtered array based on the character passed
      const arrayToUse = myApp.filterArrayByCharacter(charForFilter, myApp[e])
      // generate a name from the array and add it to the generatedNames object
      generatedNames[e] = myApp.randomizeName(arrayToUse);
    });
  }

  // don't randomize unchecked textboxes
  const uncheckedFields = [];
  $.each($('input[type=checkbox]:not(:checked)'), function () {
    uncheckedFields.push($(this).val());
  });

  uncheckedFields.forEach( e => {
    generatedNames[e] = $(`input[name=${e}]`).val();
  });

  // call function to generate string and display it
  myApp.generateString(generatedNames);
});


// DOC READY BEGINS
$(function (){
  myApp.init();

// DOC READY ENDS
});
