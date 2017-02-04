# Personal
Just a central location of notes & useful things to search against if I ever forget them. (will pron need to group into differnt files).

# Using the CMD for searching.

- Search term within file. `$ grep <term> <file>`
- Search in all the sub folers. `$ grep -r <term> <file>`
- Locate files of a certain ending. `$ find <dir> -name "extension type"`
- Locate term in files of certain ending. `$ find <dir> -name "extension type" | xargs grep "<term>"`
- Search and ignore reuslts from gitIgnore `$ git grep <term> <file>`
- Organise results into seperate blocks. `$ grep --color -n -C 2 "term" <extension type>`
- Seach for multiple terms `$ grep --color -rE "grey|gray examples/"`
- Regex term search `$ grep "^import .* from" examples`
- Non character sensitive matching `$ find . -name ".js" | grep --color -E "[sS]pec"`

# Memory leaks node.

Understanding memory issues [google](https://developer.chrome.com/devtools/docs/heap-profiling) & [unicorns](https://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/)

Generate dumps on memory leaks. [gist] (https://gist.github.com/grady-lad/457adce516c230cdde1bf69676988338)



# Docker commands 

- Access Docker container `docker exec -i -t 665b4a1e17b6 /bin/bash`
- copy files from docker `docker cp <containerId>:/file/path/within/container /host/path/target`


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

# NPM

- require a module before running task `test: mocha spec/ --require babel-register`
- list environment variables that will be available to the script at runtime `npm run env`
- run scripts in series use `&`
- run scripts in parrallel use `*&&`
- run any script that matches pattern with npm-run-all eg `npm-run-all lint:*`
- you can pipe the result from one npm script to another using `|` and output the result using `>`
- we can get use entities from package.json as vars for example the version key. To access it use `$npm_package_verison`
- we can create config vars within our package.json using the confg key `config: {...vars}` and we can get them within our scripts by using `$npm_package_config_<var_name>`


# Random 
- share localhost on the web `"start:tunnel": "cross-env NODE_ENV=development ENABLE_TUNNEL=true node server",`

