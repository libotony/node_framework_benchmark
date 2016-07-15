// module.exports = {
//     "extends": "airbnb",
//     "parser": "babel-eslint",
//     "plugins": [
//         "react"
//     ]
// };
module.exports = {
  "rules": {
    "indent": [
      2,
      2,
      {"SwitchCase": 1}
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "no-console": 0
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": "eslint:recommended"
};
