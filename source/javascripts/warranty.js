$(document).ready(function() {    
    var app = new Vue({
        el: '#app',
        data: {
            error: {
                message: '',
                active: false
            },
            success: {
                message: '',
                active: false
            },

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
                e.preventDefault();

                var self = this;
                
                self.error.active = false;
                self.success.active = false;                

                //if the form is not valid dont execute anything else
                if (!$('#app').valid()) {
                    return;
                }

                //Set loading
                self.loading = true;

                //JS object to send
                var id = {
                    lang: appMessages.Messages.lang,
                    order: encodeURIComponent(escape(self.order)),
                    fullName: encodeURIComponent(escape(self.name)),
                    email: encodeURIComponent(escape(self.email)),
                    address1: encodeURIComponent(escape(self.address)),
                    address2: encodeURIComponent(escape(self.address2)),
                    city: encodeURIComponent(escape(self.city)),
                    province: encodeURIComponent(escape(self.province)),
                    postalCode: encodeURIComponent(escape(self.postalCode)),
                    country: encodeURIComponent(escape(self.country))
                };

                //Form url to register warranty
                //http://localhost:28617/
                //https://api.shadeomatic.com
                var url = 'https://api.shadeomatic.com/warranty/send?id=' + JSON.stringify(id);

                //Register data
                $.ajax({
                    url: url,
                    error: function() {
                        self.error.active = true;
                        self.error.message = appMessages.Messages.generalError;
                    }
                }).done(function(data) {

                    //Show success page so it can be printed or saved in case the email gets blocked as spam                    
                    self.success.active = true;
                    self.success.message = appMessages.Messages.warrantySuccess;

                }).always(function(){
                    self.loading = false;

                    $('html, body').animate({
                        scrollTop: $(".section-title").offset().top
                    }, 1000);
                });                 
            },
            loadCountries: function() {
                var self = this;

                $.ajax({
                    url: self.contentUrl,
                    error: function() {
                        self.error.active = true;
                        self.error.message = appMessages.Messages.generalError;

                        $('html, body').animate({
                            scrollTop: $(".section-title").offset().top
                        }, 1000);
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