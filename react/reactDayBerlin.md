# React day Berlin

## A11y

- Use em units for to allow for zooming
- Can navigate through the website using keyboard (not just tab)
- Make font size and text readable
- Provide alts for images for blind people
- To test use a screen reader.
- Use Axe & lighthouse for auditing the website
- Chrome color picker to determine contrasts
- Reach router

## React performance

- Animations taking longer than 10ms per seconds can be jiterry
- Whydidyouupdate
- Purecomponent doesn’t work with children props
- Use memo returns the value of the function executed while use callback returns the function
- React window for super long lists (only render a subset of the list)

## React decentralized

- Ipfs = interplanetary file system
- Self organizing network alternative to https
- Distributed hash tree

## I8n & data visualization

- Use intl numberformat to translate numbers
- Use notation compact param to translate 1k to other languages
- Use react-intl at adobe
- Numbers are bi directional for some languages (Hebrew)
- React with direction or rtl-css-js to handle right to left.
- In japan they use circles instead of ticks for indicating correctness
- Use themes for languages add colors not the same for all culture.

Lightning talks

- Use @media print css query on how to style css when the user prints the webpage.
- Check out typescript.fun

## Testing

- Mocking is a code smell

## Error handling

- The are 7 error types in J's
- Null coalescing stage 4

## Svg

- Svgr CLI to transform svg to react and use svg go to optimize the css.
