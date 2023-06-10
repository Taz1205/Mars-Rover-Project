# Mars Rover Project

This project implements a Mars Rover simulation using TypeScript. The Mars Rover is placed on a square or rectangle-shaped plateau, and it can be commanded to move and turn within the boundaries of the plateau.

## Features

- Create a square or rectangle-shaped plateau by specifying the dimensions.
- Deploy multiple rovers on the plateau, each with its initial position and direction.
- Command the rovers to move forward, turn left, or turn right.
- Prevent rovers from going beyond the plateau boundaries.
- Retrieve the final position and direction of each rover.

### Installations

- Requirements
   -- Node.js
   --npm

- Clone the repository:
git clone https://github.com/Taz1205/mars-rover.git
- Navigate to the project directory:
mars-rover
- Install the dependencies:
npm install

#### Input should be like this

5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

The first line defines the dimensions of the plateau. Each rover is defined by two lines: the initial position (x, y) and the direction (N, S, E, or W), followed by the commands to be executed by the rover.

##### Run the simulation

npm start
The output will be displayed in the console, showing the final position and direction of each rover.

###### Testing

This project uses a Test-Driven Development (TDD) approach to ensure the correctness of the implementation. The tests are written using the Jest testing framework.

To run the tests, use the following command:

- npm test

This will execute all the test cases and display the results in the console.

###### Output should be like this

1 3 N
5 1 E

-----------------------------------------------------------------------------
Here's an overview of how it works:

- Input Format:

The input is provided in a specific format.
The first line of the input defines the dimensions of the plateau (width and height).
Each subsequent pair of lines represents a rover:
The first line of the pair defines the initial position of the rover (x, y coordinates) on the plateau.
The second line of the pair provides a sequence of commands (L, R, M) to be executed by the rover.

- Parsing the Input:

The executeCommands function receives the input as an array of strings.
It extracts the plateau dimensions and stores them as a rectangle or square-shaped plateau.
It processes each pair of lines representing a rover, extracting the initial position and direction, as well as the commands.

- Rover Simulation:

For each rover, a new MarsRover instance is created with the initial position, direction, and the plateau.
The rover's commands are iterated through, one by one.
Based on the command:
"L": The rover turns left.
"R": The rover turns right.
"M": The rover moves forward.
The rover's position and direction are updated accordingly.
If the rover moves beyond the plateau boundaries, it stays in its previous position and displays an error message.

- Output:

After all rovers have been processed, the final position and direction of each rover are displayed.
The getPosition and getDirection methods of the MarsRover class are used to retrieve the rover's current position and direction.

- Running the Simulation:

The main script executes the executeCommands function, passing the input data as an array of strings.
The input can be read from a file, console or provided directly in the code.
The output is displayed in the console, showing the final position and direction of each rover.

###### Scalability

Mars Rover program can be made scalable with some modifications.
It is easy to add more rovers to the Mars Rover project, you can update the input file and modify the code accordingly.
It would be easy to add more instructions, directions or increase speed like backwards, or diagonal or NE for example, we can add separate fucnctions and we should be able to successsfully run the program without having to change the existing code.

We can add other vehicles to the program and define their behavior and movement rules. The key is to create separate classes/functions for each vehicle type and appropriately modify the existing code to accommodate the new vehicle(s).

Handling Large Plateau Sizes: If you anticipate working with larger plateau sizes, we can think of implementing data structures that can handle larger grids efficiently like Spatial hashing which divides the plateau into a grid of cells and assigns each cell a unique identifier. It can improve performance when dealing with spatial queries, such as identifying nearby rovers or checking for collisions.

If the plateau is of a different shape like a trapezium or circular instead of a rectangular, you can modify the code to handle the shape by adding validation checks for the rover's position.

- Trapezium

const plateau: Position[] = [
    { x: 0, y: 0 },
    { x: plateauPoints[0], y: 0 },
    { x: plateauPoints[1], y: plateauPoints[2] },
  ];

- Circular

If the plateau is circular, it means that moving beyond one boundary will wrap around to the opposite boundary, creating a circular effect. After calculating the new position based on the current direction, the modulo operator (%) is used to wrap the coordinates around the circular plateau boundaries.
