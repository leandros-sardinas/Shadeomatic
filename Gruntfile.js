module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    newFilesOnly: true,
                    sizes: [{
                        width: 480
                    }, {                    
                        width: 768                        
                    }, {                    
                        width: 992
                    }]
                },
                files: [{
                    expand: true,
                    src: [
                        'images/products/aluminum/**.{jpg,png}',
                        'images/products/concept/**.{jpg,png}',
                        'images/products/fauxwood/**.{jpg,png}',
                        'images/products/grandeur/**.{jpg,png}',
                        'images/products/honeycomb/**.{jpg,png}',
                        'images/products/paneltrack/**.{jpg,png}',
                        'images/products/pleated/**.{jpg,png}',
                        'images/products/polysatin/**.{jpg,png}',
                        'images/products/roller/**.{jpg,png}',
                        'images/products/roman/**.{jpg,png}',
                        'images/products/shadowmagic/**.{jpg,png}',
                        'images/products/sheerluxe/**.{jpg,png}',
                        'images/products/vertical/**.{jpg,png}',
                        'images/products/wood/**.{jpg,png}'
                    ],
                    cwd: 'source/',
                    dest: 'source/'
                }]
            }
        },        
    });

    //Load responsive images
    grunt.loadNpmTasks('grunt-responsive-images');

    //Default task(s)
    grunt.registerTask('default', ['responsive_images'])
;}