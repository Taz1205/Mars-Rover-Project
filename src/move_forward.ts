//import { rover } from "./mars_rover";

type Position = [x: number, y: number];
 type Direction = "N" | "W" | "S" | "E";
 type Rover = { direction: Direction; position: Position };

export const getNextPosition = (direction:Direction, position: Position): Position => {
  const [x, y] = position;
  if (direction === "N") return [x, y + 1];
  if (direction === "E") return [x + 1, y];
  if (direction === "S") return [x, y - 1];
  if (direction === "W") return [x - 1, y];
}

export const moveForward = (rover: Rover): Rover => ({
...rover, position: getNextPosition(rover.direction, rover.position)
});