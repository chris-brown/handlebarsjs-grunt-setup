module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
          compile: {
            src: 'templates/*.handlebars',
            dest: 'scripts/handlebars-templates.js'
          }
        },
        watch: {
            handlebars: {
              files: ['<%= handlebars.compile.src %>'],
              tasks: ['handlebars:compile']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-handlebars-compiler');

    // Default task(s).
    grunt.registerTask('default', ['handlebars']);

};