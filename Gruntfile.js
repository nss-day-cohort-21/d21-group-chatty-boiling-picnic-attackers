module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: ['js/*.js', '/json/*.js'],
			options: {
				predef: ['document', 'console', '$'],
				esnext: true,
				globalstrict: false,
				globals: {'Chatty': true}
			}
		},
		watch: {
			javascript: {
				files: ['js/*.js', 'json/*.json'],
				tasks: ['jshint']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'watch']);
};