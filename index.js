/* jshint node: true */
'use strict';

module.exports = {

    name: 'sq-ember-favicon',

    included: function(app) {
          this._super.included(app);
          app.import('vendor/assets/icon-32x32.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-60x60.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-76x76.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-120x120.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-152x152.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-167x167.png', { destDir: 'assets/favicons' });
          app.import('vendor/assets/icon-180x180.png', { destDir: 'assets/favicons' });
    },

    contentFor: function(type, config) {
        if ( type === 'head-footer' ) {
            var s32 = '<link rel="icon" type="image/png" href="assets/favicons/icon-32x32.png">';
            var s60 = '<link rel="apple-touch-icon" href="assets/favicons/icon-60x60.png">';
            var s76 = '<link rel="apple-touch-icon" sizes="76x76" href="assets/favicons/icon-76x76.png">';
            var s120 = '<link rel="apple-touch-icon" sizes="120x120" href="assets/favicons/icon-120x120.png">';
            var s152 = '<link rel="apple-touch-icon" sizes="152x152" href="assets/favicons/icon-152x152.png">';
            var s167 = '<link rel="apple-touch-icon" sizes="167x167" href="assets/favicons/icon-167x167.png">';
            var s180 = '<link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/icon-180x180.png">';
            if ( config.FAVICON_MARKER === true ) {
                var marker = '<!--favicon!-->';
                return [marker,s32, s60, s76, s120, s152, s167, s180,marker].join('\n');
            } else {
                return [s32, s60, s76, s120, s152, s167, s180].join('\n');
            }
        }
    },

    isDevelopingAddon: function() {
        return true;
    }

};
