export function initialPosition() {
  return '0 0 N';
}

export function executeInstructions(input: string[]){
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0];
  const plateauHeight = plateauSize[1]; 
  if (!plateauWidth || !plateauHeight) {
    return "Invalid plateau size";
  }
 else if (plateauWidth < 0 || !Number.isInteger(plateauWidth) || plateauHeight < 0 
  || !Number.isInteger(plateauHeight)) {
    return "Invalid plateau size";
  }
  else return plateauWidth + " " + plateauHeight;
}