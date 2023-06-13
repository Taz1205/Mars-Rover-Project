//import { executeInstructions, initialPosition } from "./mars_rover";
import { turnLeft } from "./turn_left";
import { turnRight } from "./turn_right";
import { moveForward } from "./move_forward";


describe("Mars Rover Functionality", () => {
  describe("Turning left", () => {
    it("When facing N, turning left means facing W", () => {
      expect(turnLeft("N")).toBe("W");
    });
      it("When facing S, turning left means facing E", () => {
        expect(turnLeft("S")).toBe("E");
      });
        it("When facing E, turning left means facing West", () => {
          expect(turnLeft("E")).toBe("N");
        });
    it("When facing W, turning left means facing S", () => {
      expect(turnLeft("W")).toBe("S");
    });
  });
  describe("Turning right", () => {
    it("When facing N, turning right means facing W", () => {
      expect(turnRight("N")).toBe("E");
    });
      it("When facing S, turning right means facing E", () => {
        expect(turnRight("S")).toBe("W");
      });
        it("When facing E, turning right means facing West", () => {
          expect(turnRight("E")).toBe("S");
        });
    it("When facing W, turning right means facing S", () => {
      expect(turnRight("W")).toBe("N");
    });
  });
  describe("Move forward", () => {
    it("When moving N, increment the y co-ordinate", () => {
      expect(moveForward("N", [1,1])).toEqual([1,2]);
    });
      it("When moving E, increment the x co-ordinate", () => {
        expect(moveForward("E", [1,1])).toEqual([2,1]);
      });
        it("When moving S, decrement the y co-ordinate", () => {
          expect(moveForward("S", [1,1])).toEqual([1,0]);
        });
    it("When moving W, decrement the x co-ordinate", () => {
      expect(moveForward("W", [1,1])).toEqual([0,1]);
    });
  });
  
});