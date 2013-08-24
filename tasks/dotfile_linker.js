/*
 * grunt-dotfile-linker
 * https://github.com/oogatta/grunt-dotfile-linker
 *
 * Copyright (c) 2013 oogatta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var fs   = require('fs');
    var path = require('path');

    grunt.registerMultiTask('dotfile_linker', 'create symbolic links for dotfiles.', function() {
        this.files.forEach(function(file) {
            if ( !fs.existsSync(file.dest) || !fs.statSync(file.dest).isDirectory() ) {
                grunt.log.write('destination directory does not exits or is not a directory.');
                return;
            }

            file.src.map(function(src){
                return {
                    fullPath : src,
                    linkname : '.' + path.basename(src, '.dot')
                };
            }).forEach(function(target){
                var link     = path.join(file.dest, target.linkname);
                var existing = path.resolve(target.fullPath);

                if ( fs.existsSync(link) && fs.lstatSync(link).isSymbolicLink() ) {
                    grunt.log.writeln('skip:' + link);
                }
                else {
                    fs.symlinkSync(existing, link);
                    grunt.log.writeln('created:' + link);
                }
            });
        });
    });
};
