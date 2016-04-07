function makethecall(callURL){

    var ObjUl = $('<ul></ul>');
    ObjUl.addClass("ui-menu-item");
    
    $.getJSON(callURL, function(data){
        $.each(data.value, function(i, field){
            var Objli = $('<li></li>');
            Objli.text(field["Title"]);
            ObjUl.append(Objli);
        });
        $("#list-area").append(ObjUl);
    });

}
 
function makethecallwparameters(callURL,qstring){

    var ObjUl = $('<ul></ul>');
    ObjUl.addClass("ui-menu-item");

    $.getJSON(callURL+"?"+qstring, function(data){
        $.each(data.value, function(i, field){
            var Objli = $('<li></li>');
            Objli.text(field.Title);
            
            var ObjImg = $('<img>');
            
            if (field.Thumbnail !=null){
                ObjImg.attr('src',("http://quantum.sitefinity.com"+field.Thumbnail.Url));
                Objli.append($("<br/>"));
                Objli.append(ObjImg);
            }
            
            ObjUl.append(Objli);
        });
        $("#list-area").append(ObjUl);
    });

}