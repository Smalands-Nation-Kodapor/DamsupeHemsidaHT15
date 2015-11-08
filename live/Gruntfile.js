module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    newFilesOnly: 'true',
                    sizes: [{
                        name: 'small',
                        width: '30%',
                        suffix: '',
                        quality: 50
                    }, {
                        name: 'large',
                        width: '50%',
                        suffix: '',
                        quality: 50
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images/team',
                    dest: 'images/team/small'
                }]
            }
        },
        mkdir: {
            all: {
                options: {
                    create: ['js', 'css','css/base','css/components', 'css/helpers', 'css/layout', 'css/pages', 
                     'css/themes', 'css/vendors', 'images', 'images_src']
                },
            },
        },
        postcss: {
            options: {
                map: true,
                processors: [
                require('autoprefixer-core')({browsers: ['last 2 version']})]
            },
            dist: {
            src: 'css/main.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['responsive_images']);

};