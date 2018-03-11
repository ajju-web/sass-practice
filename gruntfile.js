module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                src: 'sass/style.scss',
                dest: 'css/style.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-node-sass');
    grunt.registerTask('default', ['sass']);

};