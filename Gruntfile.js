module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var path = require('path');

    grunt.initConfig({
        assetsDir: 'app',
        distDir: 'www',

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all : {
                src : ['<%= assetsDir %>/js']
            }
        },
        copy: {
            main: {
                expand:true,
                cwd: '<%= assetsDir %>/',
                src: '**',
                dest: '<%= distDir %>/'
            }
        },
        grep: {
            local: {
                files: {
                    'www/index.html': ['app/index.html']
                },
                options: {
                    pattern: 'device',
                    fileOverride: true
                }
            },
            device: {
                files: {
                    'www/index.html': ['app/index.html']
                },
                options: {
                    pattern: 'local',
                    fileOverride: true
                }
            }
        },
        connect: {
            devServer: {
                options: {
                    port: 8000,
                    base: '<%= distDir %>',
                    keepalive: false,
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['<%= assetsDir %>/js/**/*.js'],
                tasks: ['jshint', 'copy']
            },
            html : {
                files: ['<%= assetsDir %>/**/*.html'],
                tasks: ['copy', 'grep:local']
            },
            css: {
                files: ['<%= assetsDir %>/css/**/*.css'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'copy', 'grep:local', 'connect:devServer', 'watch']); //dev in local
    grunt.registerTask('dev-local', ['jshint', 'copy', 'grep:local', 'connect:devServer', 'watch']); //dev in local

    grunt.registerTask('dev-device', ['jshint','copy', 'grep:device']);//dev in device
    grunt.registerTask('prod-android', ['jshint', 'copy']);//prod TODO


};