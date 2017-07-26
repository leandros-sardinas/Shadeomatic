(function(){

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-90, -180),
        new google.maps.LatLng(90, 180));    

    var input = document.getElementById('dealer-search');
    var options = {
        //bounds: defaultBounds,
        //types: ['regions']
    };
    
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    var app = new Vue({
        el: '#app-dealer',
        data: {
            lat: 0,
            long: 0,
            dealers: []
        },
        methods: {
            //Utils
            join: function(str1, str2) {
                return str1 + str2; 
            },
            locate: function() {
                var self = this;
                var url = 'https://api.shadeomatic.com/dealer/FindDealers?lat=' + this.lat + '&lng=' + this.long + '&distance=25';
                console.log(url);
                $.ajax({
                    url: url,
                    crossDomain: true,
                    dataType: "json"
                }).done(function(data) {

                    for(var i=0; i<data.length; i++) {                        
                        self.dealers.push(data[i]);
                        console.log(data[i]);
                    }
                    
                }).error(function() {
                    console.log('An error has ocurred, please try again later.');
                })
            }
        },
        watch: {
            lat: function() {
                this.locate();
            }
        }
    });

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();               

        app.long = place.geometry.location.lng();
        app.lat = place.geometry.location.lat();
        
    });
})()