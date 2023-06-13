type Position = [x: number, y: number];
type Direction = "N" | "W" | "S" | "E";

export function moveForward(direction: Direction, position: Position) {
  const [x, y] = position;
  if (direction === "N") return [x, y + 1];
  if (direction === "E") return [x + 1, y];
  if (direction === "S") return [x, y - 1];
  if (direction === "W") return [x - 1, y];
}
