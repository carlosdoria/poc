module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run check-types',

  // Lint then format TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js)': filenames => [
    `npm run lint -- --fix ${filenames.join(' ')}`,
  ],
};
