module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false
        },
        files: {
          "public/css/core.css": "public/less/core.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['public/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.registerTask('default', ['watch']);
};