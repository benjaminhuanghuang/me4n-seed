# Dependencies
    $ npm i -S
        @angular/animations
        @angular/common
        @angular/compiler
        @angular/compiler-cli
        @angular/core
        @angular/forms
        @angular/http
        @angular/platform-browser
        @angular/platform-browser-dynamic
        @angular/platform-server
        @angular/router
        @angular/upgrade
    
# Dev-Dependencies
    $ npm i -D 
        @angular/cli
        webpack
        webpack-merge                # Merge webpack config files
        del-cli                      # del folder or file on different platform
        @types/core-js
        @types/node
        angular-router-loader
        angular2-template-loader
        awesome-typescript-loader
        html-loader
        raw-loader
        ts-loader
        typescript
        
# Run
    del-cli public/js/app && webpack --config webpack.config.dev.js --progress --profile --watch
    --progress     Display a compilation progress to stderr.
    --profile      display more detailed timing information

    Put command line to package.json and $ npm build