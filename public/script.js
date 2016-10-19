 $(document).ready(function() {
     $('.view').show();
         $('.posts1').hide();
var html=""
  $.get("/somedata",function(data){
      for(i=0;i<data.length;i++){
          html+="<section class=\"post1 col-xs-12\"><p><span class=\"postname\">"+data[i].topic+"</span><span class=\"username\">By "+data[i].name+"</span></p><p class=\"postcontent\">"+data[i].content+"</p><p class=\"time\">"+data[i].time+"</p><p class=\"clear\"></p></section>"
      }
               $(".posts").append(html);
               $(".posts1").append(html);
         });

    
  // $.get("/somedata1",function(data){
  //     for(i=0;i<data.length;i++){
  //         html="<section class=\"post1 col-xs-12\"><p><span class=\"postname\">"+data[i].topic+"</span><span class=\"username\">By "+data[i].name+"</span></p><p class=\"postcontent\">"+data[i].content+"</p><p class=\"time\">"+data[i].time+"</p><p class=\"clear\"></p></section>"
  //     }
  //              $(".posts1").append(html);
  //        });
 $(".view").click(function(){
         html="";
         $('.posts1').show();
          $(".view").hide();
 $.get("/somedata1",function(data){
      for(i=0;i<data.length;i++){
          html+="<section class=\"post1 col-xs-12\"><p><span class=\"postname\">"+data[i].topic+"</span><span class=\"username\">By "+data[i].name+"</span></p><p class=\"postcontent\">"+data[i].content+"</p><p class=\"time\">"+data[i].time+"</p><p class=\"clear\"></p></section>"
      }
                       $(".posts").append(html);
               $(".posts1").append(html);
         });

  })
});