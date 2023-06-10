export type Position = {
  x: number;
  y: number;
}
export function moveForward(plateauWidth: number, plateauHeight: number,position: Position, direction: string) {
        let newPosition: Position = { ...position };
      
        switch (direction) {
          case "N":
            newPosition.y++;
            break;
          case "S":
            newPosition.y--;
            break;
          case "E":
            newPosition.x++;
            break;
          case "W":
            newPosition.x--;
            break;
            default:
      throw new Error(`Invalid direction: ${direction}`);
        }
        if (
          newPosition.x >= 0 &&
          newPosition.x < plateauWidth &&
          newPosition.y >= 0 &&
          newPosition.y < plateauHeight
        ) {
          position = newPosition;
        } else {
          console.log("Invalid move. Rover cannot go beyond the plateau boundaries.");
        }
        return newPosition;
      }
