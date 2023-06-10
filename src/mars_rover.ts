export function initialPosition() {
  return '0 0 N';
}

export function executeInstructions(input: string[]){
  const plateauSize = input[0].split(" ").map(Number);
  const plateauWidth = plateauSize[0];
  const plateauHeight = plateauSize[1]; 
  
  return plateauWidth + " " + plateauHeight;
}