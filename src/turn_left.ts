export function turnLeft(direction: string) {
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
      return `Invalid direction: ${direction}`;
  }
}
