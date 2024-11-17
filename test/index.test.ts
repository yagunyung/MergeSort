import { merge } from "../src/index";

describe('merge', () => {
  it('should merge three collections correctly', () => {
    const collection_1 = [1, 3, 6, 7, 8, 13, 15, 16, 45, 77, 89];
    const collection_2 = [0, 2, 4, 6, 8, 10, 11, 12, 17, 20, 34, 36, 37, 48, 57, 68, 90];
    const collection_3 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 0, 1, 2, 3, 4, 6, 6, 7, 8, 8, 10, 10, 11, 12, 13, 15, 16, 17, 20, 20, 30, 34, 36, 37, 40, 45, 48, 50, 57, 60, 68, 70, 77, 80, 89, 90, 90, 100]
    );
  });

  it('should handle empty collections', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });
});
