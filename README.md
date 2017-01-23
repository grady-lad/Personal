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
