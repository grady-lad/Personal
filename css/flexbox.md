# Flexbox
- flex (block) and flex-inline (inline-block) flew yeild the same results only that flex breaks the horiztonal flow of its siblings while flex-inline will not
- using `flex-direction` we can decide the flow of the elements `row` or `column` we can also reverse them.
- Using the order property we alter the order in which flexbox children appear on the page, without making changes to the dom.
- `justify-content` declares how you can use the empty space along the direction the content is flowing
- `align-items` how to use the empty space perpendicular to the flex direction
- `align-self` same as align-items but only specified to a particalar child of a flex container with justify or align.
- The `flex-basis` property allows us to define the dimension (along the flex-direction axis) that a flexbox child should ideally have (will overwrite default width or height that is previously defined!!!!)
- `flex-grow` lets a div grow to the size of the extra space. (the number is proportion of the space, and each divs can be given different proportions)
- `flex-shrink` Used to define how elements shrink when the combination of the elements is greater in size than the allocated space.
- using `flex`: is shorthand for flex basis,shrink,grow, and different defaults than the norm. Using 1 will give all elements the same size for the allocated space.
- Adding flex-wrap to a flexbox container allows the items to form a grid. The content can then be aligned and distributed along the grid using justify-content and align-content.
