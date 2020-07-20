$(document).ready(function(){
 
    $("button").click(function(){
        //loading animation
        var loader = "<div class='circle' id='circle1'></div>"
        loader += "<div class='circle' id='circle2'>"
        $(".loader").html(loader)
        var txt = $("#txt").val()
        $.getJSON("https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: txt,
            format: "json"

        },
        function (data){
            var photoHtml ="<div class = 'row'>";
            $.each(data.items,function(i,photo){
                photoHtml += "<div class= 'col-lg-3 col-md-4 col-6 mt-3'>";
                photoHtml += '<a href= " ' + photo.link+'  " class= "d-block mb-4 h-100">';
                photoHtml += '<img src= " ' + photo.media.m + '  " class= "img-fluid h-100" ></div>';
            });
            photoHtml += "</div>"
            $("#photos").html(photoHtml);

        }
        );
        
    })
});