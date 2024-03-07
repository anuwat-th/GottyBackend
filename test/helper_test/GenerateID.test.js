import GenerateID from '../../helper/GenerateID';

describe('GenerateID', () => {
  test('generates an ID of the specified length', () => {
    const length = 10;
    const id = GenerateID(length);
    expect(id.length).toBe(length);
  });

  test('generates a different ID each time', () => {
    const length = 10;
    const id1 = GenerateID(length);
    const id2 = GenerateID(length);
    expect(id1).not.toBe(id2);
  });
});
