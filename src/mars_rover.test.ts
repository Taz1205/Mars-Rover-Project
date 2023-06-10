import {initialPosition } from "./mars_rover";

describe("Mars Rover Functionality", () => {
  it("should return the rover's initial position at 0 0 N", () => {
    expect(initialPosition()).toBe("0 0 N");
  });
});
