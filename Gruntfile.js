module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);
    grunt.loadNpmTasks('grunt-dart-sass');

    grunt.initConfig({
        'dart-sass': {
            production: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'shoptet.css': 'shoptet.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'shoptet.scss',
                    'shoptet/*.scss',
                ],
                tasks: ['dart-sass'],
                options: {
                    livereload: 35729
                }
            },
        }
    });

    grunt.registerTask('default', ['dart-sass']);

};
