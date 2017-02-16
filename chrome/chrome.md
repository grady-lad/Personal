# Logging with the chrome console.

- warning messages `console.warn`
- error log `console.error`
- blue console messages `console.debug` (easy to find your message in a polluted env)
- Use css in the console `console.log("this is my %output", "color: blue; font-size:33px")`
- Add tab in your console log `console.log(\t)`
- group messages with console comes great during iteration of methods. can also add groupCollapsed insteas of group or nesting
`
console.group('grouped messages');
console.log('x');
console.log('la');
console.groupEnd();
`
- count console mesages `console.count("message")`
- time (maybe object creation time `console.time(), console.timeEnded() //ends the time method`
- tabular format use console.table, we can also specifiy which props to show using `console.table(obj, ['proptoshow'])`

# Debugging with chrome console

- When right clicking a breakpoint we can create an expression that will trigger the breakpoint if passed.
- We can set breakpoints on elements, when attributes changes, or the node is removed or the element changes.
- The watch panel allows you to view the value of a var throughout the whole time of your applicaition. (can also be an expression)
- Debugging some networking issues ? check [here](https://developers.google.com/web/tools/chrome-devtools/network-performance/resource-loading#view-network-timing-details-for-a-specific-resource)
- Use the computed style panel within chrome to see what actual styling is being applied to an element.
- use the `$` to get elements in chrome e.g. `$(.kitten`) use `$$` to get all the elements e.g $$('span');
- to actually see where an element is in the page use `inspect` e.g. `inspect($(.kitten))`
- to monitor events use `monitorevents` e.g `monitorEvents($(.kitten), 'hover')`
- to view event bubbling select an element and click the event listener tab. There we can view ancestors of the event.
- chrome allows you to take screenshots when viewing your page within the mobile tab.
