 
 function makethecall(callURL){
    
    var ObjUl = $('<ul></ul>');
    ObjUl.addClass("ui-menu-item");

    var array1 = ['thing1', 'thing2', 'thing3'];

    var array2=[];
    $.getJSON(callURL, function(data){
        $.each(data.value, function(i, field){
            array2.push(field["Title"]);
            var Objli = $('<li></li>');
            Objli.text(field["Title"]);
            ObjUl.append(Objli);
        });
        $("#list-area").append(ObjUl);
    });

 }
 
 function makethecallnested(callURL){
    
    var ObjUl = $('<ul></ul>');
    ObjUl.addClass("ui-menu-item");

    var array1 = ['thing1', 'thing2', 'thing3'];

    var array2=[];
    $.getJSON(callURL, function(data){
        $.each(data.value, function(i, field){
            array2.push(field["Title"]);
            var Objli = $('<li></li>');
            var ObjImg = $('<img>');
            Objli.text(field.Title+"hello");
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