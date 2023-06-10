import { createPlateau, checkPlateauSize } from "./create_plateau";

export type Position = {
  x: number;
  y: number;
};
export function initialPosition() {
  return "0 0 N";
}

export function executeInstructions(input: string[]) {
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0];
  const plateauHeight = plateauSize[1];
  const plateauCheck = checkPlateauSize(plateauWidth, plateauHeight);
  const plateauCreate = createPlateau(plateauWidth, plateauHeight);
  input.splice(0, 1);
  console.log(input);
  const rovers = [];
  const roverPosition = input[0].split(" ");
  let position: Position = {
    x: Number(roverPosition[0]),
    y: Number(roverPosition[1]),
  };
  let direction: string = roverPosition[2];
  return `${position.x} ${position.y} ${direction}`;
}
