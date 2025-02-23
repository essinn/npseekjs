# npseekjs

Want to search for npm packages straight from your IDE? Use npseekjs, a CLI tool to search for npm packages by name and description.

## Installation

```bash
npm i -g npseekjs
```

## Usages

```bash
npseek "Validation library"
```

**Options**

```bash
npseek "Validation library" -limit 3

#or use shorthand

npseek "Validation library" -l 3
```

## Expected Output

```bash
Found 3 packages:

1. joi
   Version: 17.12.0
   Description: Object schema validation
   Link: https://www.npmjs.com/package/joi
   --------------------
2. yup
   Version: 1.3.2
   Description: Dead simple Object schema validation
   Link: https://www.npmjs.com/package/yup
   --------------------
3. validator
   Version: 13.11.0
   Description: A library of string validators and sanitizers
   Link: https://www.npmjs.com/package/validator
   --------------------
```
