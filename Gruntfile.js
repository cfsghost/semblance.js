module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: [
					'lib/component.js',
					'lib/component_manager.js',
					'lib/semblance.js',
					'lib/main.js'
				],
				dest: 'lib/semblance.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [ 'uglify' ]);
};
