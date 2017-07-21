var elixir = require('laravel-elixir');


elixir(function(mix){


    mix.styles([
        "font-awesome.min.css",
        "bootstrap.min.css",
        "app.css",
        "metisMenu.min.css",
        "sb-admin-2.css",
        "bootstrap-datetimepicker.css",
        "datatables.min.css"
    ],"public/css/all.css");

    mix.scripts([
        "jquery.min.js",
        "bootstrap.js",
        "app.js",
        "metisMenu.min.js",
        "sb-admin-2.js",
        "moment.js",
        "bootstrap-datetimepicker.js",
        "datatables.min.js"
    ],"public/js/all.js");
});