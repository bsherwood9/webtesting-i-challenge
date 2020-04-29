const enhancer = require("./enhancer.js");
// test away!

describe("Testing our functionalities!", () => {
  describe("testing the repair function", () => {
    it("testing that item repairs to 100", () => {
      //arrange
      const sword = {
        name: "dragon blade yo!",
        enhancement: 15,
        durability: 5
      };

      const expectedResult = 100;
      const actualResult = enhancer.repair(sword);

      expect(actualResult.durability).toBe(expectedResult);
    });
    it("testing that item repairs to 100 from 0", () => {
      //arrange
      const sword = {
        name: "dragon blade yo!",
        enhancement: 15,
        durability: 0
      };

      const expectedResult = 100;
      const actualResult = enhancer.repair(sword);

      expect(actualResult.durability).toBe(expectedResult);
    });
    it("testing that item repairs to 100 from 0", () => {
      //arrange
      const sword = {
        name: "dragon blade yo!",
        enhancement: 15,
        durability: 99
      };

      const expectedResult = 100;
      const actualResult = enhancer.repair(sword);
      expect(actualResult.durability).toBe(expectedResult);
    });
  });
  describe("testing when enhancement succeeds", () => {
    it("testing that enhancement increases by 1", () => {
      const mace = {
        name: "baby blue basher!",
        enhancement: 19,
        durability: 0
      };

      const expectedResult = 20;
      const actualResult = enhancer.succeed(mace);
      expect(actualResult.enhancement).toBe(expectedResult);
    });
    it("testing that enhancement increases by 1", () => {
      const mace = {
        name: "baby blue basher!",
        enhancement: 15,
        durability: 0
      };

      const expectedResult = 16;
      const actualResult = enhancer.succeed(mace);
      expect(actualResult.enhancement).toBe(expectedResult);
    });
    it("testing that enhancement increases by 1", () => {
      const mace = {
        name: "baby blue basher!",
        enhancement: 20,
        durability: 5
      };

      const expectedResult = 20;
      const actualResult = enhancer.succeed(mace);
      expect(actualResult.enhancement).toBe(expectedResult);
      expect(actualResult.durability).toBe(5);
    });
  });
  describe("testing enhancement failure", () => {
    it("enhancement less than 15, durability decreases by 5", () => {
      const axe = {
        name: "Ye Worthy Splitter",
        enhancement: 14,
        durability: 6
      };

      const expectedResult = 1;
      const actualResult = enhancer.fail(axe);
      expect(actualResult.enhancement).toBe(14);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement less than 15, durability less than or equal to 5 decreases to 0", () => {
      const axe = {
        name: "Ye Worthy Splitter",
        enhancement: 9,
        durability: 5
      };

      const expectedResult = 0;
      const actualResult = enhancer.fail(axe);
      expect(actualResult.enhancement).toBe(9);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement less than 15, durability less than or equal to 5 decreases to 0, and not below 0", () => {
      const axe = {
        name: "Ye Worthy Splitter",
        enhancement: 9,
        durability: 1
      };

      const expectedResult = 0;
      const actualResult = enhancer.fail(axe);
      expect(actualResult.enhancement).toBe(9);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement > than 15, durability drops by 10", () => {
      const axe = {
        name: "Ye Worthy Splitter",
        enhancement: 15,
        durability: 90
      };

      const expectedResult = 80;
      const actualResult = enhancer.fail(axe);
      expect(actualResult.enhancement).toBe(15);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement > than 15, durability < 10, d drops to 0", () => {
      const axe = {
        name: "Ye Worthy Splitter",
        enhancement: 19,
        durability: 9
      };

      const expectedResult = 0;
      const actualResult = enhancer.fail(axe);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement > than 15, durability > 10, d drops by 10", () => {
      const bigAxe = {
        name: "Ye Cat's Maw",
        enhancement: 17,
        durability: 11
      };

      const expectedResult = 1;
      const actualResult = enhancer.fail(bigAxe);
      expect(actualResult.durability).toBe(expectedResult);
    });
    it("enhancement > 16, enhancement level decreases by 1", () => {
      const noob = {
        name: "rocket",
        enhancement: 17,
        durability: 11
      };

      const expectedResult = 16;
      const actualResult = enhancer.fail(noob);
      expect(actualResult.enhancement).toBe(expectedResult);
    });
    it("enhancement > 16, enhancement level decreases by 1", () => {
      const noob = {
        name: "rocket",
        enhancement: 16,
        durability: 11
      };

      const expectedResult = 16;
      const actualResult = enhancer.fail(noob);
      expect(actualResult.enhancement).toBe(expectedResult);
    });
    it("enhancement > 16, enhancement level decreases by 1", () => {
      const noob = {
        name: "rocket",
        enhancement: 20,
        durability: 11
      };

      const expectedResult = 19;
      const actualResult = enhancer.fail(noob);
      expect(actualResult.enhancement).toBe(expectedResult);
    });
  });
  describe("checking the get function", () => {
    it("Check that enhancement level appears in name if greater than one.", () => {
      const sabre = {
        name: "French Sabre",
        enhancement: 18,
        durability: 100
      };

      const expectedResult = "[+18] French Sabre";
      const actualResult = enhancer.get(sabre);
      expect(actualResult.name).toBe(expectedResult);
    });
    it("Check that enhancement level appears in name if greater than one.", () => {
      const sabre = {
        name: "French Sabre",
        enhancement: 1,
        durability: 100
      };

      const expectedResult = "[+1] French Sabre";
      const actualResult = enhancer.get(sabre);
      expect(actualResult.name).toBe(expectedResult);
    });
  });
});
