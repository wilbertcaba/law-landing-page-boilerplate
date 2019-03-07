//bs.js
var bs = require('browser-sync').create();
bs.init({
    server: "dist",
    files: ["dist/assets/styles/*.css"],
    notify:false,
    plugins: [
        {
            module: "bs-html-injector",
            options: {
                files: ["dist/*.html"]
            }
        }
    ]
});