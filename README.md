# eqheights

Give all elements in a group of elements at least the height of the tallest element of the group.

## Install

Find [eqheights on npm](https://www.npmjs.com/package/eqheights)

```
npm i eqheights
```

## Usage

```javascript
import eqheights from 'eqheights';

// using a selector string
eqheights('.grid-items');

// or using a NodeList
const elements = document.querySelectorAll('.list-items');

eqheights(elements);
```

## License

MIT
