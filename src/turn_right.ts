type Direction = "N" | "W" | "S" | "E";

export function turnRight(direction: Direction) {
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
