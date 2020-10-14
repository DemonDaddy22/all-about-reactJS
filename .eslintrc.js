module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "settings": {
        "import/resolver": "webpack"
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "globals": {},
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "no-unused-vars": "warn",
        "no-unexpected-multiline": "warn"
    },
    "settings": {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React",
          "fragment": "Fragment",
          "version": "detect",
          "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
    }
};
