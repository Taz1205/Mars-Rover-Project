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
   /* it("Split the string input to the first rover position and direction", () => {
      expect(executeInstructions(["5 5", "1 2 N"])).toBe("1 2 N");
    });*/
    it("Check for boundaries", () => {
      expect(executeInstructions(["5 5", "7 7 N"])).toBe("Invalid boundary");
    });
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
    it("Check for invalid instructions", () => {
      expect(executeInstructions(["5 5", "1 2 N", "B"])).toBe("Valid instructions can only be 'L', 'R' or 'M'");
    });
    it("Check for moving forward once from 1 2 N", () => {
      expect(executeInstructions(["5 5", "1 2 N", "M"])).toBe("1 3 N");
    });
    it("Check for moving forward 3 steps from 1 2 N", () => {
      expect(executeInstructions(["5 5", "1 2 N", "MMM"])).toBe("1 5 N");
    });
    it("Check for moving forward once from 1 2 S", () => {
      expect(executeInstructions(["5 5", "1 2 S", "M"])).toBe("1 1 S");
    });
    it("Check for moving forward 3 steps from 1 2 S", () => {
      expect(executeInstructions(["5 5", "1 2 S", "MM"])).toBe("1 0 S");
    });
    it("Check for moving forward once from 1 2 E", () => {
      expect(executeInstructions(["5 5", "1 2 E", "M"])).toBe("2 2 E");
    });
    it("Check for moving forward 3 steps from 1 2 E", () => {
      expect(executeInstructions(["5 5", "1 2 E", "MMMM"])).toBe("5 2 E");
    });
    it("Check for moving forward once from 1 2 W", () => {
      expect(executeInstructions(["5 5", "1 2 W", "M"])).toBe("0 2 W");
    });
    it("Check for moving forward 3 steps from 5 5 W", () => {
      expect(executeInstructions(["5 5", "5 5 W", "MMMMM"])).toBe("0 5 W");
    });
    it("Check for moving left  once", () => {
      expect(executeInstructions(["5 5", "1 2 N", "L"])).toBe("1 2 W");
    });
    it("Check for moving left 2 rotations", () => {
      expect(executeInstructions(["5 5", "1 2 N", "LL"])).toBe("1 2 S");
    });
    it("Check for moving right once", () => {
      expect(executeInstructions(["5 5", "1 2 N", "R"])).toBe("1 2 E");
    });
    it("Check for moving right 4 rotations", () => {
      expect(executeInstructions(["5 5", "1 2 N", "RRRR"])).toBe("1 2 N");
    });
    it("Check for mixed instructions", () => {
      expect(executeInstructions(["5 5", "1 2 N", "LMLMLMLMM"])).toBe("1 3 N");
    });
    it("Check for mixed instructions", () => {
      expect(executeInstructions(["5 5", "3 3 E", "MMRMMRMRRM"])).toBe("5 1 E");
    });
    it("Check for mixed instructions", () => {
      expect(executeInstructions(["5 5", "0 0 N", "MRMLM"])).toBe("1 2 N");
    });
    it("Checks for mixed instructions", () => {
      expect(executeInstructions(["5 5", "5 5 S", "MRMLM"])).toBe("4 3 S");
    });
    it("Checks for boundaries after moving in S direction", () => {
      expect(executeInstructions(["5 5", "6 6 S", "MMMMMMMM"])).toBe("6 4 S");
    });
    it("Checks for boundaries after moving in N direction", () => {
      expect(executeInstructions(["5 5", "0 0 N", "MMMMMMM"])).toBe("0 1 N");
    });
    it("Checks for boundaries after moving in E direction", () => {
      expect(executeInstructions(["9 9", "10 10 E", "M"])).toBe("1 10 E");
    });
    it("Checks for boundaries after moving in W direction", () => {
      expect(executeInstructions(["10 10", "0 0 W", "MMMMMMM"])).toBe("4 0 W");
    });
  });
  describe("Check for 2nd Rover", () => {
   /* it("Check for final position of both rovers", () => {
      expect(executeInstructions(["5 5", "1 2 N", "M", "3 3 E","M"])).toBe("1 3 N 4 3 E");
    });*/
  });
});
