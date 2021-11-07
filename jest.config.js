module.exports = {
    roots: ['<rootDir>/__tests__'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    coverageDirectory: '__coverage__',
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]', '__setup__'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '^.+\\.(css|sass|scss)$': '<rootDir>/__tests__/__setup__/__mocks__/styleMock.js',
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__tests__/__setup__/__mocks__/fileMock.js',
    },
    testEnvironment: 'jsdom',
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: [
      'node_modules',
      '<rootDir>/__tests__/__setup__/__utils__'
    ],
  }