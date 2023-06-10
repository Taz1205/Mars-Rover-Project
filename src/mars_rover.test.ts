import { executeInstructions, initialPosition } from "./mars_rover";
import { createPlateau, checkPlateauSize } from "./create_plateau";

describe("Mars Rover Functionality", () => {
  describe("Rover Initial Position", () => {
    it("should return the rover's initial position at 0 0 N", () => {
      expect(initialPosition()).toBe("0 0 N");
    });
  });
  describe("Grid/Plateau Size", () => {
    it("should return the plateau gridsize for a square", () => {
      expect(checkPlateauSize(20, 20)).toBe("20 20"); //Initially input will be just the grid size
    });
    it("should return the plateau gridsize for a rectangle", () => {
      expect(checkPlateauSize(8, 6)).toBe("8 6");
    });
    it("should check if grid size input are positive integers", () => {
      expect(checkPlateauSize(-1, -10)).toBe("Invalid plateau size");
    });
  });
  describe("createPlateau", () => {
    it("should create a square plateau with the correct dimensions", () => {
      const width = 10;
      const height = 10;

      const plateau = createPlateau(width, height);

      expect(plateau.length).toBe(4);
      expect(plateau[0]).toEqual({ x: 0, y: 0 });
      expect(plateau[1]).toEqual({ x: width, y: 0 });
      expect(plateau[2]).toEqual({ x: width, y: height });
      expect(plateau[3]).toEqual({ x: 0, y: height });
    });
    it("should create a rectangle plateau with the correct dimensions", () => {
      const width = 8;
      const height = 6;

      const plateau = createPlateau(width, height);

      expect(plateau.length).toBe(4);
      expect(plateau[0]).toEqual({ x: 0, y: 0 });
      expect(plateau[1]).toEqual({ x: width, y: 0 });
      expect(plateau[2]).toEqual({ x: width, y: height });
      expect(plateau[3]).toEqual({ x: 0, y: height });
    });
  });
  describe("Given position and direction of the first rover", () => {
    /*it("Split the string input to the first rover position and direction", () => {
      expect(executeInstructions(["5 5", "1 2 N"])).toBe("1 2 N");
    });*/
    it("Check for valid position", () => {
      expect(executeInstructions(["5 5", "-99 -1 N"])).toBe("Invalid position");
    });
    it("Check for valid position", () => {
      expect(executeInstructions(["5 5", " W"])).toBe("Invalid position");
    });
    it("Check for valid position", () => {
      expect(executeInstructions(["5 5", "a -1 S"])).toBe("Invalid position");
    });
    it("Check for valid direction", () => {
      expect(executeInstructions(["5 5", "1 2 Z"])).toBe("Invalid direction");
    });
    it("Check for valid direction", () => {
      expect(executeInstructions(["5 5", "1 2 1"])).toBe("Invalid direction");
    });
    it("Check for valid direction", () => {
      expect(executeInstructions(["5 5", "1 2 "])).toBe("Invalid direction");
    });
  });
  describe("Check for given instructions", () => {
    it("Check for empty instructions, returns original position and direction", () => {
      expect(executeInstructions(["5 5", "1 2 N", ""])).toBe("1 2 N");
    });
  });
});
