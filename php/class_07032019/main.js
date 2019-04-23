// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// 2. RAW TEXT STRINGS

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ['Willy the Goblin',
               'Big Daddy',
               'Father Christmas'];

var insertY = ['the soup kitchen',
                'Disneyland',
                'the White House'];

var insertZ = ['spontaneously combusted',
                'melted into a puddle on the sidewalk',
                'turned into a slug and crawled away'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

//instruction 1

var newStory = storyText;

//instruction 2

var xItem = randomValueFromArray(insertX);

var yItem = randomValueFromArray(insertY);

var zItem = randomValueFromArray(insertZ);

//instruction 3

var newStory = newStory.replace(':insertx:', xItem);

var newStory = newStory.replace(':inserty:', yItem);

var newStory = newStory.replace(':insertz:', zItem);

var newStory = newStory.replace(':insertx:', xItem);

// return ita’loom


  if(customName.value !== '') {
    var name = customName.value;
    var newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14);

    var temperature =  Math.round((94 - 32) * 5/9);

    var newStory = newStory.replace('300 pounds', weight+' stone');
    var newStory = newStory.replace('94 fahrenheit', temperature+' centigrade');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
