$(".content > .code-game-3D > .tag > a").ready(function() {        
    $(".content > .code-game-3D > .tag > a").removeClass("active"); 
    $(this).addClass("active");          
});

/*
$(document).ready(function() {
  $(".code").ready(function() {
    var displayResources = $(".display-books");
    
    displayResources.text("Loading data from JSON source...");

    $.ajax({
      type: "GET",
      url: "data.json", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);

        var output = "";

        for (var i in result) {
          output += "<div class='lang-logo'>" +
                    "<i.content > .code-game-3D > .tag > amg src='"+result[i].logo+"'/>" +
                    "<div class='title'>"+result[i].title+"</div>" +
                    "<div class='rating'><p><span style='margin-right:7px;'>"+result[i].star+"</span>"+result[i].rating+"</p></div>" +
                    "<div class='cash'><p>"+result[i].amount+"</p></div>" +
                    "</div>";
        }

        output += "";

        displayResources.html(output);
        
      }
    });
  });
}); 
*/