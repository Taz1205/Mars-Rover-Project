export function createPlateau(plateauWidth: number, plateauHeight: number) {
    return [
      { x: 0, y: 0 },
      { x: plateauWidth, y: 0 },
      { x: plateauWidth, y: plateauHeight },
      { x: 0, y: plateauHeight },
    ];
  }

