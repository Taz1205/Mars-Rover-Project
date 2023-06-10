import {
  executeInstructions, initialPosition
  
} from "./mars_rover";

describe("Mars Rover Functionality", () => {
  describe("Rover Initial Position", () => {
  it("should return the rover's initial position at 0 0 N", () => {
    expect(initialPosition()).toBe('0 0 N');
  });
});
describe("Grid Size or Plateau Size", () => {
  it("should return the plateau gridsize for a square", () => {
    expect(executeInstructions(['20 20'])).toBe('20 20');
  });
  it("should return the plateau gridsize for a rectangle", () => {
    expect(executeInstructions(['8 6'])).toBe('8 6');
  });
});
});
