//Rover object

var myRover = {
  position: [0,0],
  direction: 'N'
};

//Directional face functions

function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[0] + "]");
}

function goBack(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
    break;
    case 'E':
      myRover.position[1]++;
    break;
    case 'S':
      myRover.position[0]--;
    break;
    case 'W':
      myRover.position[1]--;
    break;
    }

  console.log("New Rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}


function goRight(myRover) {
  switch(myRover.direction){
    case 'N':
      myRover.direction = 'E';
    break;
    case 'E':
      myRover.direction = 'S';
    break;
    case 'S':
      myRover.direction = 'W';
    break;
    case 'W':
      myRover.direction = 'N';
    break;
    }

    console.log("New Rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
    console.log("Rover is now facing: [" + myRover.direction + "]");
}



function goLeft(myRover) {
  switch(myRover.direction){
    case 'N':
      myRover.direction = 'W';
    break;
    case 'E':
      myRover.direction = 'N';
    break;
    case 'S':
      myRover.direction = 'E';
    break;
    case 'W':
      myRover.direction = 'S';
    break;
    }

    console.log("New Rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
    console.log("Rover is now facing: [" + myRover.direction + "]");
}



//Moving functions
function inputCmd (){
  var inputCmd = prompt("Greetings, use the f, b, l, r keys to go front, back, left, right");

    var cmdArray = inputCmd.split("");

  for(i = 0; i < cmdArray.length; i++){

    if(cmdArray[i] == 'f') {
      goForward(myRover);
    }

    else if(cmdArray[i] == 'b') {
      goBack(myRover);
    }

    else if(cmdArray[i] == 'l') {
      goLeft(myRover);
    }

    else if(cmdArray[i] == 'r') {
      goRight(myRover);
    }

    else {
      console.log('INVALID INPUT DETECTED');
      return inputCmd();
    }
  }//end of for loop
}//end of inputCmd function



//pseudo-grid wrap statements

if (myRover.position[0] > 9){
  myRover.position[0] -= 10;
}
if (myRover.position[0] < 0){
  myRover.position[0] += 10;
}
if (myRover.position[1] > 9){
  myRover.position[1] -= 10;
}
if (myRover.position[1] < 0){
  myRover.position[1] += 10;
}



//Bonus 1 - obstacles
var rocket = {
  position: [4,7],
  direction: 'S'
};











/*Note: Upon much research and testing I decided
to omit the presence of the grid. For whatever reason
This project works despite the presence of said grid.
It seems that the circumstantial if/then statements
work in place of grid, ridding the the need one.*/
