# Quickstart

- Demostrates how to consume the gulp tasks of sub folders.
- Subject of <https://hackernoon.com/how-to-consume-and-run-gulp-tasks-in-other-files-from-a-central-gulpfile-j32n33my>

Run the following in a new folder:

```
mkdir great-gulping-website
cd great-gulping-website
npm init -y
npm i gulp browser-sync --save-dev
touch gulpfile.js index.html package.json stylesheet.scss

mkdir admin-site
cd admin-site
npm init -y
npm i gulp gulp-sass --save-dev
touch gulpfile.js index.html package.json stylesheet.scss

cd ..
mkdir public-site
cd public-site
npm init -y
npm i gulp gulp-sass --save-dev
touch gulpfile.js index.html package.json stylesheet.scss
```

Result:

```
great-gulping-website
    |- node_modules
    |- admin-site
        |- node_modules
        |- gulpfile.js
        |- index.html
        |- package.json
        |- stylesheet.scss
    |- public-site
        |- node_modules
        |- gulpfile.js
        |- index.html
        |- package.json
        |- stylesheet.scss
    |- gulpfile.js
    |- index.html
    |- package.json
    |- stylesheet.scss
```

```
gulp

# Output of first "build"
# NB Each build happens twice

> [17:02:21] Using gulpfile ~/great-gulping-website/gulpfile.js
> [17:02:21] Starting 'default'...
> [17:02:21] Starting 'scssTask'...
> [17:02:21] Starting 'scssTask'...
> [17:02:21] Finished 'scssTask' after 34 ms
> [17:02:21] Finished 'scssTask' after 36 ms
> [17:02:21] Starting 'watchTask'...
> [Browsersync] Access URLs:
>  --------------------------------------
>        Local: http://localhost:3000
>     External: http://192.168.1.107:3000
>  --------------------------------------
>           UI: http://localhost:3001
>  UI External: http://localhost:3001
>  --------------------------------------
> [Browsersync] Serving files from: ./

# And then when we change any scss file:

> [17:02:34] Starting 'scssTask'...
> [17:02:34] Starting 'scssTask'...
> [17:02:34] Finished 'scssTask' after 11 ms
> [17:02:34] Finished 'scssTask' after 12 ms

# Again, notice there are two builds each time.
```
