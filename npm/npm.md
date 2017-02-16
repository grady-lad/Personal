# NPM

- require a module before running task `test: mocha spec/ --require babel-register`
- list environment variables that will be available to the script at runtime `npm run env`
- run scripts in series use `&`
- run scripts in parrallel use `*&&`
- run any script that matches pattern with npm-run-all eg `npm-run-all lint:*`
- you can pipe the result from one npm script to another using `|` and output the result using `>`
- we can get use entities from package.json as vars for example the version key. To access it use `$npm_package_verison`
- we can create config vars within our package.json using the confg key `config: {...vars}` and we can get them within our scripts by using `$npm_package_config_<var_name>`
