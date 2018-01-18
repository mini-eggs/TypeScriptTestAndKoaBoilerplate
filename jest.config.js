module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(tsx|ts)?$": "typescript-babel-jest",
    "^.+\\.(js)$": "babel-jest"
  },
  testMatch: ["**/*.spec.(ts|js)"]
};
