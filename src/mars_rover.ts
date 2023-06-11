import { createPlateau, checkPlateauSize } from "./create_plateau";
import { moveForward } from "./move_forward";
import { turnLeft } from "./turn_left";
import { turnRight } from "./turn_right";

export type Position = {
  x: number;
  y: number;
};

export function initialPosition() {
  return "0 0 N";
}
function isWithinBoundaries(position: Position, plateauWidth: number, plateauHeight: number): boolean {
  return position.x >= 0 && position.x <= plateauWidth && position.y >= 0 && position.y <= plateauHeight;
}
function isValidPosition(position: Position): boolean {
  return position.x >= 0 && position.y >= 0;
}
function isValidDirection(direction: string): boolean {
  const validDirections = ["N", "S", "E", "W"];
  return validDirections.includes(direction);
}

export function executeInstructions(input: string[]) {
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0];
  const plateauHeight = plateauSize[1];
  const plateauCheck = checkPlateauSize(plateauWidth, plateauHeight);
  const plateauCreate = createPlateau(plateauWidth, plateauHeight);
  input.splice(0, 1);
  const rovers = [];
  const roverPosition = input[0].split(" ");
  const roverInstructions = input[1];
  input.splice(0, 1);
  let position: Position = {
    x: Number(roverPosition[0]),
    y: Number(roverPosition[1]),
  };
  let direction: string = roverPosition[2];
   if (!isValidPosition(position)) return "Invalid position";
   else if (!isWithinBoundaries(position, plateauWidth, plateauHeight)) return "Invalid boundary";
  else if (!isValidDirection(direction)) return "Invalid direction";
  else {
    if(roverInstructions.length !== 0) {
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
          position = moveForward(
            plateauWidth,
            plateauHeight,
            position,
            direction
          );
          break;
        default:
          return `Valid instructions can only be 'L', 'R' or 'M'`;
      }
    }
    rovers.push({ position, direction });
  }
    return `${position.x} ${position.y} ${direction}`;
  }
}
