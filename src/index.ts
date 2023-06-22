import * as readline from 'node:readline';
import { executeInstructions } from './mars_rover';

let rovers: Rovers = [];
let output = [];
let inputString: string[]= [];
let roverCount: number;
let roverIteration: number = 0;
let gridStr: GridString;
let currentPosition: Orientation;
const roverNames = ["Roam-E.0", "Marvello", "Rove-X"];

export type GridString = `${number} ${number}`;
export type Rovers = [Orientation, string][]
export type Grid = [number, number];
export type Direction = "N" | "W" | "S" | "E";
export type Position = {
    x: number;
    y: number;
  };
  export type Orientation = `${Position["x"]} ${Position["y"]} ${Direction}`;
  

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
  terminal: false
});

function askFisrtQuestion() {
    console.log('Welcome to Mars!');
    return reader.question('How many rovers do you want?\n', askSecondQuestion);
  }
  function askSecondQuestion(roverCountString: string) {
    roverCount = parseInt(roverCountString);
  
    if (isNaN(roverCount)) return reader.question('How many rovers do you want? (Please give a number)\n', askSecondQuestion);
  
    return reader.question('What are the dimensions of your plateau?\n', askThirdQuestion)
  }
  
  function askThirdQuestion(answer: string) {
  
    const gridArray: (number[] | null) = convertGridToArray(answer);
    if (gridArray === null) return reader.question('What are the dimensions of your plateau? (Please give 2 numbers)\n', askThirdQuestion)
  
    gridStr = answer as GridString;
    inputString.push(gridStr);
    return askFourthQuestion(null);
  }

  function askFourthQuestion(instruction: string | null) {
    roverIteration++;
  
    if (instruction !== null) {
      rovers.push([currentPosition, instruction]);
      inputString.push(currentPosition, instruction);
    
      
    if (roverIteration > roverCount) {
      console.log('--------------------');
      
      console.log(inputString);
      console.log(executeInstructions(inputString));    
      console.log('--------------------');
      return askAgain();
    }
    }
    return reader.question(`What is the starting position of rover ${roverNames[roverIteration-1]}?\n`, askFifthQuestion);

}

function askFifthQuestion(orientation: string) {
    if (convertPositionToArray(orientation) === null)
      return reader.question(`What is the starting position of rover ${roverNames[roverIteration-1]}? (Please give answer such as 3 3 N)\n`, askFifthQuestion);
  
    currentPosition = orientation as Orientation;
   
    return reader.question(`What instructions are you giving rover ${roverNames[roverIteration-1]}?\n`, askFourthQuestion);
  }
  
  function askAgain() {
    return reader.question('Would you like to go again? (answer Y or N)\n', goAgain)
  }
  
  function goAgain(answer: string) {
    switch (answer) {
      case 'Y':
        console.log('--------------------');
        inputString = [];
        return askFisrtQuestion();
      case 'N':
        return process.exit(1);
        default:
            return askAgain();
    }
  }
  export function convertPositionToArray(orientation: string) {
    const positionAsArray = orientation.split(' ');
    if (positionAsArray.length !== 3) return null;
  
    const xPosition: number = parseInt(positionAsArray[0]);
    const yPosition: number = parseInt(positionAsArray[1]);
  
    if (isNaN(xPosition + yPosition)) return null;
  
    const direction: string = positionAsArray[2];
  
   //if (!([...Direction] as string[]).includes(direction)) return null;
  
    return [xPosition, yPosition, direction as Orientation];
  }
  
  export function convertGridToArray(gridString: string) {
    const output = gridString.split(' ').map(a => parseInt(a));
  
    if (output.length !== 2 || output.some(isNaN)) return null;
  
    return output as Grid;
  }
  
  askFisrtQuestion();
  
  
