const myApp = {}

myApp.first = [
  'Accadacca',
  'Arvo',
  'Ankle Biter',
  'Barbie',
  'Bogan',
  'Brekky',
  'Chook',
  'Cobber',
  'Clucky',
  'Dardy',
  'Devo',
  'Drongo',
  'E1',
  'E2',
  'E3',
  'Flannie',
  'Flanno',
  'Furphy',
  'Goon',
  'Galah',
  'Grot',
  'Hoon',
  'Hard Yakka',
  'Heaps',
  'Iffy',
  'I2',
  'I3',
  'Knick',
  'K2',
  'K3',
  'Lappy',
  'Lollie',
  'Legless',
  'Maccas',
  'Moz',
  'M3',
  'Nuddy',
  'Nosh',
  'N3',
  'O1',
  'O2',
  'O3',
  'Pash',
  'Piss',
  'P3',
  'Rakka',
  'Rellie',
  'Rello',
  'Sheila',
  'Slab',
  'Straya',
  'Two-Up',
  'True Blue',
  'Tucker',
  'Uwie',
  'U2',
  'U3',
  'V1',
  'V2',
  'V3',
  'W1',
  'W2',
  'W3',
  'X1',
  'X2',
  'X3',
  'Yonks',
  'Y2',
  'Y3',
  'Z1',
  'Z2',
  'Zed'
];

myApp.second = [
  'the Crunch',
  'Crasher',
  'Slackjaw',
  'the Massive'
];

myApp.car = [
  'V8-Interceptor',
  'War Rig',
  'Razor Cola',
  'Magnum Opus',
  'BigFoot',
  'Doof Wagon',
  'Gigahorse'
];

myApp.init = function() {
  myApp.randomizeName(myApp.first);
  myApp.randomizeName(myApp.second);
  myApp.randomizeName(myApp.car);
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

// create string from inputs and displays it
myApp.generateString = function(nameObject) {
  const first = nameObject.first;
  const second = nameObject.second;
  const car = nameObject.car;
  const string = `${first} ${second}, driver of the ${car}!`;
  $('.generated-name h3').text(string);
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

  // check if the character is a letter,
  if (character.match(regex)) {
    // if yes, then filter nameArray by the letter
    nameArray.forEach( e => {
      // if the name starts with 'the', 
        // skip it and compare the fourth character (after 'the ')
          // push the name to the filtered array if it's a match
      if (e.substr(0,3) === "the") {
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
    // if no, then return the unfiltered array
    return nameArray
  }
};

// on form submit,
// 
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
      // const charForFilter = myApp.getFirstChar($(`input[name=${e}]`));
      const charForFilter = myApp.getFirstChar($(`input[name=${e}]`));
      // get a filtered array based on the character passed
      const arrayToUse = myApp.filterArrayByCharacter(charForFilter, myApp[e])
      
      generatedNames[e] = myApp.randomizeName(arrayToUse);
      
    });
  // then randomize the values of the text inputs
  }

  // don't randomize unchecked textboxes
  const uncheckedFields = [];
  $.each($('input[type=checkbox]:not(:checked)'), function () {
    uncheckedFields.push($(this).val());
  });

  uncheckedFields.forEach( e => {
    generatedNames[e] = $(`input[name=${e}]`).val();
  });

  // call function to generate string
  myApp.generateString(generatedNames);
});


// DOC READY BEGINS
$(function (){
  myApp.init();

// DOC READY ENDS
});
