$(document).ready(function(){

    var countries = [{
        name: 'Canada',
        provinces: [{
            province: 'Ontario',
            abbrv: 'ON'
        }, {
            province: 'Quebec',
            abbrv: 'QC'
        }, {
            province: 'British Columbia',
            abbrv: 'BC'
        }, {
            province: 'Alberta',
            abbrv: 'AB'
        }, {
            province: 'Manitoba',
            abbrv: 'MB'
        }, {
            province: 'Saskatchewan',
            abbrv: 'SK'
        }, {
            province: 'Nova Scotia',
            abbrv: 'NS'
        }, {
            province: 'New Brunswick',
            abbrv: 'NB'
        }, {
            province: 'Newfoundland and Labrador',
            abbrv: 'NL'
        }, {
            province: 'Prince Edward Island',
            abbrv: 'PE'
        }, {
            province: 'Northwest Territories',
            abbrv: 'NT'
        }, {
            province: 'Yukon',
            abbrv: 'YT'
        }, {
            province: 'Nunavut',
            abbrv: 'NU'
        }]
    },
    {
        name: 'United States',
        provinces: [{
            province: 'Other',
            abbrv: 'Other'
        }]
    }];

    var app = new Vue({
        el: '#app',
        data: {
            countries: countries,
            provinces: countries[0].provinces,

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
        methods: {            
            loadProvinces: function() {
                
            }
        }
    });
})