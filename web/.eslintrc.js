module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'always']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.12.0'
    }
  },
  parser: 'babel-eslint'
}
