import {
  executeInstructions, initialPosition
  
} from "./mars_rover";

describe("Mars Rover Functionality", () => {
  describe("Rover Initial Position", () => {
  it("should return the rover's initial position at 0 0 N", () => {
    expect(initialPosition()).toBe('0 0 N');
  });
});
describe("Grid/Plateau Size", () => {
  it("should return the plateau gridsize for a square", () => {
    expect(executeInstructions(['20 20'])).toBe('20 20');//Initially input will be just the grid size
  });
  it("should return the plateau gridsize for a rectangle", () => {
    expect(executeInstructions(['8 6'])).toBe('8 6');
  });
  it("should check if grid size input is empty", () => {
    expect(executeInstructions(['1 -1'])).toBe("Invalid plateau size");
  });
  it("should check if grid size input are positive integers", () => {
    expect(executeInstructions(['A B'])).toBe("Invalid plateau size");
  });

});
});
