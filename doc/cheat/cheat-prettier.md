# Cheat prettier

## `.prettierrc`

```
semi: false
arrowParens: avoid
printWidth: 80
overrides:
  - files: "src/mazes.json"
    options:
      semi: true
  - files:
      - "*.html"
      - "legacy/**/*.js"
    options:
      tabWidth: 4
```
