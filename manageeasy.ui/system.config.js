(function (global) {
        // map tells the System loader where to look for things
       var map= {
            // our app is within the app folder
            'app': 'src/app',

            // angular bundles
            '@angular/core': 'lib/npmlibs/@angular/core/bundles/core.umd.js',
            '@angular/common': 'lib/npmlibs/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib/npmlibs/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'lib/npmlibs/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib/npmlibs/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib/npmlibs/@angular/http/bundles/http.umd.js',
            '@angular/router': 'lib/npmlibs/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib/npmlibs/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'lib/npmlibs/rxjs',
        };


        // packages tells the System loader how to load when no filename and/or no extension
       var packages={
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
       };

        var config = {
            map: map,
            packages: packages
        }
        
    System.config(config);
})(this);