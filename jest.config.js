module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/example'],
  setupFilesAfterEnv: ['./jest/setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/utils'],
};
