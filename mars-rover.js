const rover = {
  direction : "N",
  x: 0,
  y: 0,
  travelLog: [{y:0, x:0}]
}

let board = [
  [0, "*", 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function turnLeft(rover) {
  
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
  return `${rover.direction}`
} 



function turnRight(rover){
        switch(rover.direction){
      case "W": 
        rover.direction = "N";
        break;
      case "S": 
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "N": 
        rover.direction = "E";
        break;
        }  
   return `${rover.direction}`

}



function moveForward(rover, board){
  switch(rover.direction){
      case "W": 
      if (board[rover.y][rover.x - 1] === "*") {
        console.log(`you shall not pass`);
        } else {
        rover.x--
        }
        break;
    case "N": 
    if (board[rover.y - 1][rover.x] === "*") {
      console.log(`you shall not pass`);
      } else {
        rover.y--
      }
        break;
    case "S": 
    if (board[rover.y + 1][rover.x] === "*") {
      console.log(`you shall not pass`);
      } else {
        rover.y++
      }
        break;
    case "E":
      if (board[rover.y][rover.x + 1] === "*") {
        console.log(`you shall not pass`);
        } else {
        rover.x++
        }
        break;
      }

  return `${rover.direction}`
}     



function moveBackward(rover){
  switch(rover.direction){
    case "N" :
      rover.y++
      break;
    case "S" :
      rover.y--
      break;
    case "W" : 
      rover.x++
      break;
    case "E" :
      rover.x--
      break;
  }
  return `${rover.direction}`
}



function commands(list) {

  for(let i = 0; i < list.length; i++) { 
       switch(list[i]) {
         case "l": 
           turnLeft(rover);
           break;
         case "r":
           turnRight(rover);
           break;
         case "f":
          moveForward(rover, board);
          break;
         case "b":
          moveBackward(rover);
          break;
          default:
            console.log(`insira um comando correto`)
            break;
          }
}
let newPosition = {y: rover.y, x: rover.x};
    rover.travelLog.push(newPosition);
if (newPosition.y > 9 || newPosition.y < 0 || newPosition.x < 0 || newPosition.x > 9) {
  console.log(`você está fora do quadro`);
} else {
return rover.travelLog
}
}

console.log(commands("rf"));


