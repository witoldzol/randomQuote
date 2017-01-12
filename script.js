$(document).ready(function(){
    
    $(".button").on("click", function(){
        
        $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json){
            
          
     
            var test = JSON.stringify(json);
            
          
            
            $(".quote").html(test);          
        });
    
        
    });
    
  
    
});