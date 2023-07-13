# Order Up! (Name WIP)

### How to Play

The goal of the game is to place 10 randomly generated numbers in order. You don't know what numbers will come next, so you have to think about where to place them. The game goes like this:

1. Get a random number
2. Put it in an empty slot such that all numbers before it are lower and all numbers after it are higher
   - If there are no valid slots to put the number, you lose
   - If you fill the last slot, you win
3. Goto step 1

Right now, the game is set up to have 10 slots and to give you numbers between 1 and 100, inclusive.
You will never get a number which you have already put into a slot.

### Setup

1. Clone repo
2. `npm i`
3. `npm run dev`
4. Open http://localhost:5173/ in your browser

### Future Ideas

- Allow user to select number of slots and range of numbers
- Publish website
- Make prettier
  - Could add a number line to visualize the locations of the numbers which have already been placed
