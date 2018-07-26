module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        sass: {
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'shoptet.css': 'shoptet.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);

};
