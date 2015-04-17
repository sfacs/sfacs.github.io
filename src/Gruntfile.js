module.exports = function(grunt) {
require('jit-grunt')(grunt);

grunt.initConfig({
    less: {
        development: {
            options: {
                compress: false,
                yuicompress: false,
                optimization: 0
            },
            files: {
                "../css/styles.css": "less/styles.less" // destination file and source file
            }
        }
    },
    jade: {
        compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
                cwd: "jade/",
                src: "**/*.jade",
                dest: "../",
                expand: true,
                ext: ".html"
            } ]
        }
    },
    watch: {
        styles: {
            files: ['less/**/*.less'], // which files to watch
                              tasks: ['less'],
                              options: {
                                  nospawn: true
                              }
                          }, 
                         jade: {
                            files: ['jade/*.jade'], // which files to watch
                            tasks: ['jade']
                         }
          }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['less', 'watch', 'jade']);
};

