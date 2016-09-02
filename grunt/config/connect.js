'use strict';

module.exports = function(grunt) {
  grunt.config.set('connect',{
    server:{
      options: {
        port: 9000,
        hostname: 'localhost'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};
