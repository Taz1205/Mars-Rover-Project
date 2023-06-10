export function createPlateau(plateauWidth: number, plateauHeight: number) {
    return [
      { x: 0, y: 0 },
      { x: plateauWidth, y: 0 },
      { x: plateauWidth, y: plateauHeight },
      { x: 0, y: plateauHeight },
    ];
  }

  export function checkPlateauSize(plateauWidth: number, plateauHeight: number) {
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
      return plateauWidth + " " + plateauHeight;
    }
  }