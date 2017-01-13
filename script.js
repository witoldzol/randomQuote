$(document).ready(function(){
    
    
        
    $(".button").on("click", function(){
        
        $.getJSON("http://imdbapi.poromenos.org/", function(val){
            
           var key = JSON.stringify(val);
            
            $(".picture").html(key);
        });
       
        $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json){
           
            var test = JSON.stringify(json.quote);
            var char = JSON.stringify(json.character);
            
            $(".quote").html(test);
            $(".name").html(char);
        });
        


    });
    
    
    
});