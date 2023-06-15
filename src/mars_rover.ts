import { moveForward } from "./move_forward";
import { turnLeft } from "./turn_left";
import { turnRight } from "./turn_right";

 type Direction = "N" | "W" | "S" | "E";
 type Position = [x: number, y: number];
 type Rover = { direction: Direction; position: Position };

export const rover = (direction: Direction, position: Position): Rover => ({
direction, position: position || start()
});

const start = () => [1,1];

export const apply = (state: Rover, instruction: string): Rover => {
  if (instruction === "L")
    return {
      ...state,
      direction: turnLeft(state.direction)
    };
  if (instruction === "R")
    return {
      ...state,
      direction: turnRight(state.direction)
    };
    if (instruction === "M") 
    return { position: moveForward(state)
    };
    
};
export const executeInstructions = (instructions: string, state: Rover) => {
    instructions.split('').reduce(apply, state);
};

const initialState = (location:string) => {
    const [x,y,direction] = location.split(" ");
    return rover(direction, [parseInt(x), parseInt(y)]);
}
const run = (program: string[]) => {
    const {location, instructions} = program;
   return executeInstructions(instructions, initialState(location));
}