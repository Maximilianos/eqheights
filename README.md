# eqheights

Give all elements in a group of elements at least the height of the tallest element of the group.

## Install

Find [eqheights on npm](https://www.npmjs.com/package/eqheights)

```
npm i eqheights
```

## Usage Examples

Simplest, one off:

```javascript
import eqheights from 'eqheights';

// using a selector string
eqheights('.grid-items');

// or using a NodeList
const elements = document.querySelectorAll('.list-items');

eqheights(elements);
```

Responsive:

```javascript
import eqheights from 'eqheights';

const gridEqualizer = eqheights('.grid-items');
window.addEventListener('resize', gridEqualizer.recalc);
```

Togglable:

```javascript
import eqheights from 'eqheights';

// autorun = false because we
// want to initialize only,
// not run eqheights yet
const {recalc, clear} = eqheights('.grid-items', {autorun: false});

const container = document.getElementById('grid');
document
  .getElementById('toggle')
  .addEventListener('click', () => {
    Array.prototype.indexOf(container.classList, 'active') < 0
      ? recalc()
      : clear();

    container.classList.toggle('active');
  });
```

Togglable and Responsive:

See this codepen: http://codepen.io/Maximilianos/pen/OyBYvv?editors=001

## License

MIT © [Max GJ Panas](maxpanas.com)
