(function(){
    var app = new Vue({
        el: '#app-installation',
        data: {
            query: '',
            installationManuals: []
        },
        created: function() {
            this.fetchInstallationInstructions();
        },
        watch: {
            query: function(newQuery) {                
                //Reset the query and installation list
                if(newQuery === '') {
                    this.showAll();
                    return;
                }

                for(var i=0;i < this.installationManuals.length; i++) {
                    var visibleCategory = false;
                    for(var j=0; j<this.installationManuals[i].files.length; j++) {
                        var name = this.installationManuals[i].files[j].name + " " + this.installationManuals[i].files[j].language;
                        if (name.toLowerCase().indexOf(newQuery.toLowerCase()) === -1) {
                            this.installationManuals[i].files[j].visible = false;                            
                        } else {
                            visibleCategory = true;
                            this.installationManuals[i].files[j].visible = true;
                        }
                    }
                    this.installationManuals[i].visible = visibleCategory;
                }
            }
        },
        computed: {
            noResults: function() {
                var noResults = true;

                for(var i=0;i < this.installationManuals.length; i++) {
                    if (this.installationManuals[i].visible) {
                        noResults = false;
                        break;
                    }
                }

                return noResults;
            }
        },
        methods: {            
            showAll: function() {
                for(var i=0;i < this.installationManuals.length; i++) {
                    this.installationManuals[i].visible = true;
                    for(var j=0; j<this.installationManuals[i].files.length; j++) { 
                        this.installationManuals[i].files[j].visible = true;
                    }
                }
                return;
            },
            fetchInstallationInstructions: function() {                
                var self = this;
                $.ajax({
                    url: '/data/installation-instructions.json'
                }).done(function(installationManuals) {                    
                    var manuals = installationManuals.manuals.sort(function(a,b) {
                        return a.sequence - b.sequence;
                    });

                    for(var i=0; i<manuals.length; i++) {
                        var manual = manuals[i];
                        manual.visible = true;

                        for(var j=0; j<manuals[i].files.length; j++) {
                            manuals[i].files[j].visible = true;
                        }

                        self.installationManuals.push(manuals[i]);
                    }
                })
                .error(function(){
                    console.log('An error has ocurred, please try again later.');
                });
            }
        }
    })
})()