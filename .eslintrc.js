module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "commonjs": true 
    },
    "plugins": [
        "react"
    ],
    'extends': [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prop-types": 0
    },
    "overrides": [
        {
            "files": ["bundle.js"],
            "rules": {
            "no-unused-expressions": "off"
            }
        }
    ],
    "globals": {
        "__dirname": true
    }
};