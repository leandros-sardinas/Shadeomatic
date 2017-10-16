//I should watch the quote on Google API console and enable billing in case we run out
$(document).ready(function() {
    
    var app = new Vue({
        el: '#app-dealer',
        data: {
            googleKey: 'AIzaSyBrfC1HJoRlC6m_BB28O_uE1HJ4iw6_Svo',
            query: '',
            distance: 5,
            statuses: {
                inSearch: false,
                addressSelected: false
            },
            distances: [5,10,25,50],
            coordinates: {
                lat: 0,
                lng: 0
            },            
            dealers: [],
            error: {
                inError: false,
                message: '',
                clear: function() {
                    this.inError = false;
                    this.message = "";
                }
            }
        },
        mounted: function() {
            //Initialize Google Autocomplete and add event when address is selected
            var self = this;
            var input = document.getElementById('dealer-search');
            var options = {
                componentRestrictions: { country: "CA" }                
            };
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();
                self.query = place.formatted_address;
                self.coordinates.lat = place.geometry.location.lat();
                self.coordinates.lng = place.geometry.location.lng();
                self.statuses.addressSelected = true; 
            });
        },
        methods: {
            //Utils
            join: function(str1, str2) {
                return str1 + str2; 
            },
            firstLetter: function(name) {
                if(name.length > 0) {
                    return name.slice(0,1);
                }
                
                return "";
            },
            linkEmail: function(email) {
                return "mailto:" + email;
            },
            linkNumber: function(number) {
                return "tel:" + number;
            },
            linkMap: function(lat,long){
                return "https://maps.google.com?q=" + lat + "," + long;
            },
            formatNumber: function(number) {
                var length = number.length;
                switch (length) {
                    case 10:
                        return number.slice(0, 3) + '-' + number.slice(3, 6) + '-' + number.slice(6, 10);
                        break;
                    case 11:
                        return number.slice(0,1) + '-' + number.slice(1, 4) + '-' + number.slice(4, 7) + '-' + number.slice(7, 11);
                        break;
                    default:
                        return number;
                        break;
                }
            },
            //Find dealers by distance
            locate: function() {
                var self = this;                
                var url = 'https://api.shadeomatic.com/dealer/FindDealers?lat=' + self.coordinates.lat + '&lng=' + self.coordinates.lng + '&distance=' + self.distance;

                $.ajax({
                    url: url,
                    crossDomain: true,
                    dataType: "json",
                    error: function(){
                        self.error.inError = true;
                        self.error.message = appMessages.Messages.generalError;
                    }
                }).done(function(data) {                    
                    if(data.length < 1) {
                        self.error.inError = true;
                        self.error.message = appMessages.Messages.noDealers;
                        return;
                    }

                    for(var i=0; i<data.length; i++) {
                        self.dealers.push(data[i]);
                    }
                    
                    //Wait for render to cancel loading effect
                    Vue.nextTick(function(){
                        self.statuses.inSearch = false;
                    })

                    
                })
            },
            changeDistance: function(dist, event) {                
                event.preventDefault();
                this.distance = dist;
            },
            //Click event for search
            search: function() {                
                var self = this;
                self.dealers = [];
                self.error.clear();
                this.statuses.inSearch = true;

                if(this.autoCompleteUsed === true) {
                    self.locate();
                } else {

                    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.query +"&key=" + this.googleKey + '&components=country:CA';
                    $.ajax({
                        url: url,
                        crossDomain: true,
                        dataType: "json",
                        error: function() {
                            self.error.inError = true;
                            self.error.message = appMessages.Messages.generalError;                        
                        }
                    }).done(function(data) {                           
                        if (data.status === 'OK') {
                            self.coordinates.lat = data.results[0].geometry.location.lat;
                            self.coordinates.lng = data.results[0].geometry.location.lng;
                            self.locate();
                        } else {
                            self.error.inError = true;
                            self.error.message = appMessages.Messages.invalidAddress;

                            Vue.nextTick(function(){
                                self.statuses.inSearch = false;
                            })                            
                        }
                    })
                }
            }
        }
    });    

})