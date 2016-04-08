function doit(){
        var sf = new Sitefinity({
            serviceUrl: 'http://quantum.sitefinity.com/api/authenticated'
        });
        
        sf.authentication.login("anton", "password",
            function(){
                var sfDataObj = sf.data({
                            urlName: "newsitems"
                        });
                        
                sfDataObj.get();
            }
        );
        var query = new Sitefinity.Query();
        
        
        
}