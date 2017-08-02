//Rover object

var myRover = {
  position: [0,0],
  direction: 'N'
};

//Directional face functions

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
    break;
    case 'E':
      rover.position[1]++;
    break;
    case 'S':
      rover.position[0]--;
    break;
    case 'W':
      rover.position[1]--;
    break;
    }

  console.log("New Rover position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


function goRight(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
    break;
    case 'E':
      rover.direction = 'S';
    break;
    case 'S':
      rover.direction = 'W';
    break;
    case 'W':
      rover.direction = 'N';
    break;
    }

    console.log("New Rover position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("Rover is now facing: [" + rover.direction + "]");
}



function goLeft(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
    break;
    case 'E':
      rover.direction = 'N';
    break;
    case 'S':
      rover.direction = 'E';
    break;
    case 'W':
      rover.direction = 'S';
    break;
    }

    console.log("New Rover position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("Rover is now facing: [" + rover.direction + "]");
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
      console.log('error');
      return inputCmd();
    }
  }//end of for loop
}//end of inputCmd function



//pseudo-grid wrap statements

if (myRover.position[0] > 10){
  myRover.position[0] -= 10;
}
if (myRover.position[0] < 10){
  myRover.position[0] += 10;
}
if (myRover.position[1] > 10){
  myRover.position[1] -= 10;
}
if (myRover.position[1] < 10){
  myRover.position[1] += 10;
}



//Bonus 1 - obstacles
var rocket = {
  position: [4,7],
  direction: 'S'
};










//test test button


function commands() {
  var commands = prompt('Hi operator! Please input the sequence of commands to move the rover. Use f (foward), b (backward), l (left) or r (right).');
}



/*Note: Upon much research and testing I decided
to omit the presence of the grid. For whatever reason
This project works despite the presence of said grid.
It seems that the circumstantial if/then statements
work in place of grid, ridding the the need one.*/
