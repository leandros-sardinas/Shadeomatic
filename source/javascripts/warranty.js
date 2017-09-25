$(document).ready(function() {    
    var app = new Vue({
        el: '#app',
        data: {
            error: '',
            inError: '',
            loading: false,

            contentUrl: '/db/countries.json',
            countries: [],
            provinces: [],
            
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
            this.loadCountries();
        },
        methods: {
            sendWarranty: function(e) {
                var self = this;

                if (!$('#app').valid()) {
                    return;
                }

                //Set loading
                self.loading = true;

                //Form url to register warranty
                var url = '';

                //Register data
                $.ajax({
                    url: '',
                    error: function() {
                        self.inError = true;
                        self.error = appMessages.Messages.generalError;
                    }
                }).done(function(data) {

                }).always(function(){
                    self.loading = false;
                });

                console.log(this.order);
                console.log(this.name);
                console.log(this.email);
                console.log(this.country);
                console.log(this.province);
                console.log(this.address);
                console.log(this.address2);
                console.log(this.city);
                console.log(this.postalCode);

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
                    self.country = self.countries[0].abbrv;
                    self.provinces = self.countries[0].provinces;
                    self.province = self.countries[0].provinces[0].abbrv;
                })
            }
        },
        watch: {
            country: function(val) {
                for(var i=0; i<this.countries.length; i++) {
                    if (this.countries[i].abbrv === val) {
                        this.country = this.countries[i].abbrv;
                        this.provinces = this.countries[i].provinces;                        
                        this.province = this.countries[i].provinces[0].abbrv;

                        return;
                    }
                }                
            }
        }
    });
})