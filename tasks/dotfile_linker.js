/*
 * grunt-dotfile-linker
 * https://github.com/oogatta/grunt-dotfile-linker
 *
 * Copyright (c) 2013 oogatta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('dotfile_linker', 'create symbolic links for dotfiles.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
        });
    });
};
