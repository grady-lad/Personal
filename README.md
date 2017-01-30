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
- 

# Random 
- share localhost on the web `"start:tunnel": "cross-env NODE_ENV=development ENABLE_TUNNEL=true node server",`

