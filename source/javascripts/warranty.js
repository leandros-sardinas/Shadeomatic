$(document).ready(function() {    
    var app = new Vue({
        el: '#app',
        data: {
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
        created: function() {

        },
        methods: {
            loadCountries: function() {
                var self = this;

                $.ajax({
                    
                })
            }
        }
    });
})