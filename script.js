$("button").click(function(){
    var color=$(".scrappy").val();
     var age=$(".mystery").val();
    if(age>=16&&color==="red"){
        $("#Fred").show();
    //Fred
        
}
    if(age<=16){
        $("#Shaggy").show();
    //Shaggy
    }
  
    
    

});


