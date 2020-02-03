const rover = {
  direction : "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft() {
  	    switch(rover.direction){
      case "N": 
        rover.direction = "W";
        break;
      case "W": 
        rover.direction = "S";
        break;
      case "S": 
        rover.direction = "E";
        break;
      case "E": 
        rover.direction = "N";
        break;  
}
 console.log(`${rover.direction}`);
}


function turnRight(){
      	switch(rover.direction){
      case "W": 
        rover.direction = "N";
        break;
      case "S": // SOUTH
        rover.direction = "W";
        break;
      case "E": // EAST
        rover.direction = "S";
        break;
      case "N": // NORTH
        rover.direction = "E";
        break;
        }
  console.log(`Direction : ${rover.direction}`);
}

function moveForward(rover){
  switch(rover.direction){
      case "W": 
        rover.x--
        break;
      case "N": 
        rover.y--
      case "S": 
        rover.y++
        break;

}
  console.log(rover.direction);
}

function moveBackward(){
  switch(rover.direction){
  case "N" :
  rover.y ++
  break;
  case "S" :
  rover.y --
  break;
  case "W" : 
  rover.x ++
  break;
  case "E" :
  rover.x --
  break;}
}

  
function commands(list) {
  for(let i = 0; i < list.length; i++) 
    switch(order[i]) {
      case "l": 
      turnLeft();
        rover.travelLog.push(rover);
        break;
      case "r":
        turnRigth();
        rover.travelLog.push(rover);
        break;
      case "f"
        moveFoward();
         rover.travelLog.push(rover);
        break;
      case "b"
        moveBackward();
        rover.travelLog.push(rover);
        break;
        
    }
};

commands("rffrfflfrff");

