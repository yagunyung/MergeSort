Setup project
1. Initiate a new project:    npm init -y

2. Adding typescript to project:    npm install typescript --save-dev

3. Adding jest (Testing framework):    npm install jest --save-dev

4. Install ts-jest package that allows jest to work with typescript:    npm install ts-jest --save-dev

5. Install the type definition for jest:    npm install @types/jest --save-dev

6. Create and edit jest.config.js

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};

7. Edit package.json

"scripts": {
  "test": "jest",
}

Write code for merge sort
1. write index.ts in src folder
2. write index.test.ts in test folder

Run unit test:    npm test
