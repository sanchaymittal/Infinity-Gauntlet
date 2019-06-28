var tID = {
  snap: null,
  time: null
}; //we will use this variable to clear the setInterval()


function animateScript(e) {
const audio = e.target.querySelector('audio');
  
//Reset every click
clearInterval(tID[e.target.id]); //reset animation
audio.currentTime = 0; //reset sound
  
//INITIALIZE
const startPosition = 0;
var    position = startPosition; //start position for the image slicer
// const  interval = 50; //100 ms of interval for the setInterval()
const fullImgWidth = 3840;
const  diff = 80;     //diff as a variable for position offset
const  interval = 50; //100 ms of interval for the setInterval() Animation
  
audio.play();
tID[e.target.id] = setInterval ( () => {
e.target.style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < fullImgWidth)
{ position = position + diff;}
//we increment the position by 256 each time
else
{ 
  position = startPosition;
  clearInterval(tID[e.target.id]);
}
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()