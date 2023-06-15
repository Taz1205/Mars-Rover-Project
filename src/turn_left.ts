type Direction = "N" | "W" | "S" | "E";

export function turnLeft(direction: Direction) {
  switch (direction) {
    case "N":
      return "W";
    case "S":
      return "E";
    case "E":
      return "N";
    case "W":
      return "S";
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
}
