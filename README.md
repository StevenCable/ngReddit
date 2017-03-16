# Angular 1.x Webpack ES6

Setup

1. create a new github project named ngReddit
1. clone your new github project
1. change directory into ngReddit
1. grab the starter kit source files from @preboot
    - `git remote add preboot_origin https://github.com/preboot/angular-webpack.git`
    - `git fetch preboot_origin`
    - ```git checkout `git log preboot_origin/master | head -n 1 | awk '{print $2}'` .```
1. commit
1. test it out (read the README.md)
    -. `yarn install`
    -. `npm start`

# Exercise

goals

- webpack
- use es6 classes
- ui-router
- xhr calls

spec

- 1 "app" module
- 4 "states"
    - default
        - controller
        - template
    - aww
        - controller
        - service
        - template
    - programmerhumor
        - controller
        - service
        - template
    - mechanicalkeyboards
        - controller
        - service
        - template
- 1 directive
    - thumb
        - directive
- default has links to spa routes
    - /aww
        - renders just thumbnails
    - /programmerhumor
        - renders titles thumbnails
    - /MechanicalKeyboards
        - renders titles thumbnails links
    - /eyebleach
        - renders clickable titles that reveal full image

steps

1. remove AppCtrl
1. create default state
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. add nav route
1. add ui-router
    1. import `*` as `uiRouter`
    1. import default state
    1. load `'ui.router'` into app module
    1. add `<section ui-view>`
    1. configure `$stateProvider`
        - _"Home should be clickable"_
    1. run `$state.go`
1. create aww state
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. import aww state
    1. add nav route
1. create aww service
    1. returns async xhr promise
    1. add `error` and `posts` to `$scope`
    1. display list of thumbnails
    1. a bit of css
1. create programmerhumor state and service
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. import aww state
    1. add nav route
    1. create service
    1. display list of thumbnails and titles
    1. a bit of css
1. make AwwState thumbnails expandable
1. create a Thumb directive to make all thumbnails expandable