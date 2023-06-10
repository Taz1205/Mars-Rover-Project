    export function turnRight(direction: string) {
        switch (direction) {
          case "N":
            return "E";
          case "S":
            return "W";
          case "E":
            return "S";
          case "W":
            return "N";
            default:
      throw new Error(`Invalid direction: ${direction}`);
        }
    }
