//import { executeInstructions, initialPosition } from "./mars_rover";
import { turnLeft } from "./turn_left";
import { turnRight } from "./turn_right";


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
});