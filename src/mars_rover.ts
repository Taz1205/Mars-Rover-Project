import {createPlateau} from "./create_plateau";

export function initialPosition() {
  return "0 0 N";
}

export function executeInstructions(input: string[]) {
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0];
  const plateauHeight = plateauSize[1];
  if (
    !plateauWidth ||
    !plateauHeight ||
    plateauWidth < 0 ||
    !Number.isInteger(plateauWidth) ||
    plateauHeight < 0 ||
    !Number.isInteger(plateauHeight)
  )
    return "Invalid plateau size";
  else 
  {
    const plateau = createPlateau(plateauWidth, plateauHeight);
    return plateauWidth + " " + plateauHeight;
  }
}
