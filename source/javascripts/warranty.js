$(document).ready(function() {    
    var app = new Vue({
        el: '#app',
        data: {
            error: '',
            inError: '',

            contentUrl: '/db/countries.json',
            countries: [],
            selectedCountry: {},
            order:'',
            name: '',
            email: '',
            country: '',
            province: '',
            address: '',
            address2: '',
            city: '',
            postalCode: ''
        },
        mounted: function() {
            this.loadCountries();
        },
        methods: {
            sendWarranty: function(e) {                
                $('#app').validate();
                e.preventDefault();
            },
            loadCountries: function() {
                var self = this;

                $.ajax({
                    url: self.contentUrl,
                    error: function() {
                        self.inError = true;
                        self.error = appMessages.Messages.generalError;
                    }
                }).done(function(data) {
                    self.countries = data.countries;
                    self.selectedCountry = self.countries[0];
                })
            }
        }
    });
})