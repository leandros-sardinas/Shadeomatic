$('body').ready(function(){
    var contactApp = new Vue({
        el: '#app',
        data: {
            error: {
                active: false,
                message: ''
            },
            success: {
                active: false,
                message: ''
            },
            loading: false,

            name: '',
            company: '',
            phone: '',
            email: '',
            message: ''
        },
        methods: {
            send: function(e){
                e.preventDefault();
                
                if (!$('#app').valid()) {
                    return;
                }

                var self = this;
                this.loading = true;
                self.error.active = false;

                //Validate recaptcha
                var response = grecaptcha.getResponse();                
                if(response.length == 0) {
                    self.error.active = true;
                    self.error.message = '';
                    self.loading = false;
                    return;
                }

                var id = {
                    name: encodeURIComponent(escape(self.name)),
                    company: encodeURIComponent(escape(self.company)),
                    phone: encodeURIComponent(escape(self.phone)),
                    email: encodeURIComponent(escape(self.email)),
                    message: encodeURIComponent(escape(self.message)),
                    recaptcha: response
                };
                
                $.ajax({
                    //https://api.shadeomatic.com/
                    url: 'http://localhost:28617/Contact/ContactEmail/' + id,
                    error: function(){
                        self.error.active = true;
                        self.error.message = appMessages.Messages.generalError;                        
                    }
                }).done(function(data) {                    
                    self.success.active = true;
                    self.success.message = appMessages.Messages;
                }).always(function(){
                    self.loading = false;

                    $('html, body').animate({
                        scrollTop: $(".section-title").offset().top
                    }, 1000);
                });
            }
        }
    });
})