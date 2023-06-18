import { createPlateau, checkPlateauSize } from "./create_plateau";
import { moveForward } from "./move_forward";
import { turnLeft } from "./turn_left";
import { turnRight } from "./turn_right";

export type Position = {
  x: number;
  y: number;
};

export function initialPosition() {
  const initPos = '0 0 N';
  return initPos;
}
function isWithinBoundaries(
  position: Position,
  plateauWidth: number,
  plateauHeight: number
): boolean {
  return (
    position.x >= 0 &&
    position.x <= plateauWidth &&
    position.y >= 0 &&
    position.y <= plateauHeight
  );
}
function isValidPosition(position: Position): boolean {
  return position.x >= 0 && position.y >= 0;
}
function isValidDirection(direction: string): boolean {
  const validDirections = ["N", "S", "E", "W"];
  return validDirections.includes(direction);
}
export function detectCollision(
  position: Position,
  roverPositions: Position[]
): boolean {
  return roverPositions.some(
    (pos) => pos.x === position.x && pos.y === position.y
  );
}

export function executeInstructions(input: string[]) {
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0] + 1;
  const plateauHeight = plateauSize[1] + 1;
  const plateauCheck = checkPlateauSize(plateauWidth, plateauHeight);
  const plateauCreate = createPlateau(plateauWidth, plateauHeight);
  input.splice(0, 1);

  let rovers = [];
  const roverPositions = [];
  let collisionDetected = false;
  const roverNames = ["Roam-E.0","Marvello", "Rove-X"];
  let roverNameIndex = 0;
  for (let i = 0; i < input.length; i+=2) {
    const roverPosition = input[i].split(" ");
    const roverInstructions = input[i + 1];
    //input.splice(0, 1);

    let position: Position = {
      x: Number(roverPosition[0]),
      y: Number(roverPosition[1]),
    };
    let newPosition: Position = {
      x: 0,
      y: 0,
    };
    let direction: string = roverPosition[2];
    const roverName = roverNames[roverNameIndex] || `Rover ${roverNameIndex}`;
roverNameIndex++;

    if (!isValidPosition(position)) return "Invalid position";
    else if (!isWithinBoundaries(position, plateauWidth, plateauHeight))
      return "Invalid boundary";
    else if (!isValidDirection(direction)) return "Invalid direction";
    else if (roverInstructions.length === 0)
        return "Please input some instructions";
      else {
        for (let i = 0; i < roverInstructions.length; i++) {
          const instruction = roverInstructions[i];
          switch (instruction) {
            case "L":
              direction = turnLeft(direction);
              break;
            case "R":
              direction = turnRight(direction);
              break;
            case "M":
              newPosition = moveForward(
                plateauWidth,
                plateauHeight,
                position,
                direction
              );
              if(isWithinBoundaries(newPosition, plateauWidth, plateauHeight) && 
              !detectCollision(newPosition, roverPositions)) {
               position = newPosition;
           } else {
               return `Rover ${roverName} cannot move to position (${newPosition.x}, ${newPosition.y})`;
           }
           break;
            default:
              return `Valid instructions can only be 'L', 'R' or 'M'`;
          }
        }
        rovers.push({ roverName, newPosition, direction });
        roverPositions.push(position);
        collisionDetected = detectCollision(newPosition, roverPositions);
        for (let i = 0; i < rovers.length; i++) {
          for (let j = i + 1; j < rovers.length; j++) {
              if (rovers[i].newPosition.x === rovers[j].newPosition.x &&
                  rovers[i].newPosition.y === rovers[j].newPosition.y) {
                  return `Collision detected between ${rovers[i].roverName} and ${rovers[j].roverName}`;
              }
          }
      }
      }
  }
  let output = "";
  for (let i = 0; i < rovers.length; i++) {
    output =
      output +
      `${rovers[i].roverName}: ${rovers[i].newPosition.x} ${rovers[i].newPosition.y} ${rovers[i].direction} `;
  }
  return output.trim();
}
