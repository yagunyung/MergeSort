# Setup Project
1. Creating folder for project
```
mkdir mergesort
cd mergesort
```
2. In mergesort folder, create a **src** folder for source code and a **test** folder for unit test
```
mkdir src
mkdir test
```
3. Initiate a new project in the root of **mergesort** folder
```
npm init -y
```
4. Adding typescript to project
```
npm install typescript --save-dev
```
5. Adding jest (Testing framework)
```
npm install jest --save-dev
```
6. Install ts-jest package that allows jest to work with typescript
```
npm install ts-jest --save-dev
```
7. Install the type definition for jest
```
npm install @types/jest --save-dev
```
8. Create and edit jest.config.js
```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
```
9. Edit package.json
```
"scripts": {
  "test": "jest",
}
```
# Write TypeScript Code
1. Create a file called **index.ts** inside **src** folder. Paste the following code.
```
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let m1 = merge2array(collection_1, collection_2)
    let m2 = merge2array(m1, collection_3.reverse())

    return m2
}

function merge2array(a1: number[], a2: number[]): number[] {
    let result: number[] = []
    let i = 0, j = 0

    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            result.push(a1[i++])
        } else {
            result.push(a2[j++])
        }
    }

    while (i < a1.length) result.push(a1[i++])
    while (j < a2.length) result.push(a2[j++])

    return result
}
```
2. Create a file called **index.test.ts** inside **test** folder. Paste the following code.
```
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
```
# Unit Test
Finally, run unit test
```
npm test
```
