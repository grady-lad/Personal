# Random css

- The :target selector allows us to interact with a fragment identifier, or hash, in our URL from CSS.

- use `>` to style only direct childs of that div e.g. `section > a`

- To style the adjacent sibling div use `+` e.g. `section h2 + p` will style only the p tag that comes after the h2 within section.

- To style all the sibilings after a div use `section h1 ~ *`

- create a selector in chrome. Right click an element within the element view and click copy selector. Go to the style tab and paste your selector within a new style and modify it to your needs :)

- text-overflow:ellipsis only works when the following are true:

  - The element's width must be constrained in px (pixels). Width in % (percentage) won't work unless using calc E.G. calc(80%)
  - The element must have overflow:hidden and white-space:nowrap set.

- Lets say we have a div that is 80% but we want to center it according to the width of the screen then this can work:

```javascript
 position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
```
