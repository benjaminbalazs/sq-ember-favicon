/* jshint node: true */
'use strict';

module.exports = {

    name: 'sq-ember-favicon',

    included: function(app) {
          this._super.included(app);
          app.import('vendor/assets/manifest.json', { destDir: '' });
          app.import('vendor/assets/favicon-32x32.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/favicon-96x96.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/favicon-16x16.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-57x57.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-60x60.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-72x72.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-76x76.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-114x114.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-120x120.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-144x144.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-152x152.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/apple-icon-180x180.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/android-icon-192x192.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/ms-icon-144x144.png', { destDir: 'assets/favicons' });
    },

    contentFor: function(type, config) {
        if ( type === 'head-footer' ) {
            var manifest = '<link rel="manifest" href="manifest.json">';
            var s32 = '<link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png">';
            var s96 = '<link rel="icon" type="image/png" sizes="96x96" href="assets/favicons/favicon-96x96.png">';
            var s16 = '<link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png">';
            var a57 = '<link rel="icon" type="image/png" sizes="57x57" href="assets/favicons/apple-icon-57x57.png">';
            var a60 = '<link rel="icon" type="image/png" sizes="60x60" href="assets/favicons/apple-icon-60x60.png">';
            var a72 = '<link rel="icon" type="image/png" sizes="72x72" href="assets/favicons/apple-icon-72x72.png">';
            var a76 = '<link rel="icon" type="image/png" sizes="76x76" href="assets/favicons/apple-icon-76x76.png">';
            var a114 = '<link rel="icon" type="image/png" sizes="114x114" href="assets/favicons/apple-icon-114x114.png">';
            var a120 = '<link rel="icon" type="image/png" sizes="120x120" href="assets/favicons/apple-icon-120x120.png">';
            var a144 = '<link rel="icon" type="image/png" sizes="144x144" href="assets/favicons/apple-icon-144x144.png">';
            var a152 = '<link rel="icon" type="image/png" sizes="152x152" href="assets/favicons/apple-icon-152x152.png">';
            var a180 = '<link rel="icon" type="image/png" sizes="180x180" href="assets/favicons/apple-icon-180x180.png">';
            var ad192 = '<link rel="icon" type="image/png" sizes="180x180" href="assets/favicons/apple-icon-180x180.png">';
            var meta1 = '<meta name="msapplication-TileColor" content="#ffffff">';
            var ms = '<meta name="msapplication-TileImage" content="assets/favicons/ms-icon-144x144.png">';
            var meta3 = '<meta name="theme-color" content="#ffffff">';
            if ( config.APP.favicons !== false ) {
                return [s32, s96, s16, manifest, a57, a60, a72, a76, a114, a120, a144, a152, a180, ad192, meta1, ms, meta3].join('\n');
            }
        }
    },

    isDevelopingAddon: function() {
        return true;
    }

};
