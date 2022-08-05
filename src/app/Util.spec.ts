import { Util } from './Util';

describe('Util', () => {
  describe('add', () => {
    it('should add two number', () => {
      const result = Util.add(10, 10);
      expect(result).toBe(20); //matchers
    });
  });
});

describe('Util', () => {
  describe('subtract', () => {
    it('should subtract two number', () => {
      const result = Util.subtract(30, 10);
      expect(result).toBe(20);
    });
  });
});
