# Personal
Just a central location of useful things to search against if I ever forget them.


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
