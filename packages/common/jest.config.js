module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  roots: ["<rootDir>/src"],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  }
};
