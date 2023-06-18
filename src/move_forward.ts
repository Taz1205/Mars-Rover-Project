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
          if (newPosition.x > plateauWidth)
          newPosition.x = newPosition.x - (plateauWidth);
          else if (newPosition.x < 0)
          newPosition.x = newPosition.x + (plateauWidth);
          else if (newPosition.y > plateauHeight)
          newPosition.y = newPosition.y - (plateauHeight);
          else if (newPosition.y < 0)
          newPosition.y = newPosition.y + (plateauHeight);
        position = newPosition;
        return newPosition;
      }
