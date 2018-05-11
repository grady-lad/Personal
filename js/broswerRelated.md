### event delegation, Bubbling, Capturing

* avoid add event listeners to specific nodes
* event listener is added to one parent.
* The parent with event listener anaylizes events that are bubbled to find a match on its child elements.
* Parents can check which child was clicked by using the `event.target`
* We can check div types using `e.target.matches`
* Sometimes the event will not be on our desired type, so we can get our desired type via `e.target.closest`
* If our parents have same events defined for them we can use `event.stopPropagation()` to prevent the event from bubbling.
* Capturing is like the opposite of bubbling
