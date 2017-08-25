module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        name: "large",
                        width: 992,
                        suffix: "-992",
                        quality: 100
                    }, {
                        name: "medium",
                        width: 768,
                        suffix: "-768",
                        quality: 100
                    }, {
                        name: "small",
                        width: 480,
                        suffix: "-480",
                        quality: 100
                    }]
                }
            }, 
            files: [{
                expand: true,
                src: ['images/products/aluminum/**.{jpg,png}'],
                cwd: 'source/'
            }]
        },
        
    });

    //Load responsive images
    grunt.loadNpmTasks('grunt-responsive-images');

    //Default task(s)
    grunt.registerTask('default', ['grunt-responsive-images'])
;}