(function(){
    var app = new Vue({
        el: '#app-measurement',
        data: {
            inError: false,
            error: '',

            contentUrl: '/db/measuring-guides.json',
            query: '',
            manuals: []
        },
        created: function() {
            this.fetchContent();
        },
        watch: {
            query: function(newQuery) {                
                //Reset the query and installation list
                if(newQuery === '') {
                    this.showAll();
                    return;
                }

                for(var i=0;i < this.manuals.length; i++) {
                    var visibleCategory = false;

                    for(var j=0; j<this.manuals[i].files.length; j++) {
                        var name = this.manuals[i].files[j].name + " " + this.manuals[i].files[j].language;
                        if (name.toLowerCase().indexOf(newQuery.toLowerCase()) === -1) {
                            this.manuals[i].files[j].visible = false;  
                        } else {
                            visibleCategory = true;
                            this.manuals[i].files[j].visible = true;
                        }
                    }
                    this.manuals[i].visible = visibleCategory;
                }
            }
        },
        computed: {
            noResults: function() {
                var noResults = true;

                for(var i=0;i < this.manuals.length; i++) {
                    if (this.manuals[i].visible) {
                        noResults = false;
                        break;
                    }
                }

                return noResults;
            }
        },
        methods: {            
            showAll: function() {
                for(var i=0;i < this.manuals.length; i++) {
                    this.manuals[i].visible = true;
                    for(var j=0; j<this.manuals[i].files.length; j++) { 
                        this.manuals[i].files[j].visible = true;
                    }
                }
                return;
            },
            fetchContent: function() {
                var self = this;

                self.inError = false;

                $.ajax({
                    url: self.contentUrl,
                    error: function() {
                        self.inError = true;
                        self.error = appMessages.Messages.generalError;                    
                    }
                }).done(function(mans) {
                    var remoteManuals = mans.manuals.sort(function(a,b) {
                        return a.sequence - b.sequence;
                    });

                    for(var i=0; i<remoteManuals.length; i++) {
                        var manual = remoteManuals[i];
                        manual.visible = true;

                        for(var j=0; j<remoteManuals[i].files.length; j++) {
                            remoteManuals[i].files[j].visible = true;
                        }

                        self.manuals.push(remoteManuals[i]);
                    }
                });                
            }
        }
    })
})()
