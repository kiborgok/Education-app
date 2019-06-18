//Function to keep coding/gaming/3D links have a red border while active.
$('.content > .code-game-3D > .tag > a').ready(function() {        
    $('.content > .code-game-3D > .tag > a').removeClass('active'); 
    $(this).addClass('active');          
});

//Function to hide the signup form when outer screen is clicked.

let modal = document.getElementById('signup-id-reference'); 

window.onclick = function(event) { 

    if (event.target == modal) { 

        modal.style.display = 'none'; 
    } 
}

//Functions to show and hide the register form

let hideModal = () => {
    document.getElementById('signup-id-reference').style.display='none';
}

let showSignup = () => {
    document.getElementById('signup-id-reference').style.display='block';
}


//Function to fetch course data

 $(function(){
        $.ajax({
            url: "data/data.json",
            type: "get",
            beforeSend: function(){
                $('#loader').show();
            },
            success: function(data){
                let displaydata = document.getElementById('coding_link_first_row');
 
                let html = " ";
                    html += "<div class='long-box'>";
                    html += "<p>The most popular selection<br>of courses<br>choose everything is free</p>";
                    html += "</div>";
                for (let i in data.coding_link_first_row) {

                    html += "<div class='row code1'>";
                    html += "<a href='load-item.html'><div class='lang-logo'>";
                    html += "<img src='" + data.coding_link_first_row[i].logo + "'/>";
                    html += "<div><p>" + data.coding_link_first_row[i].title + "</p></div>";
                    html += "<div class='rating'><p><span style='margin-right:7px;'>" + data.coding_link_first_row[i].star + "</span> " + data.coding_link_first_row[i].rating + "</p></div>";
                    html += "<div class='cash'>" + data.coding_link_first_row[i].amount + "</p></div>";
                    html += "</div></a>";
                    html += "</div>";
                    }
        
                    displaydata.innerHTML = html;
                    $('.code1').hide().each(function(index){
                        $(this).delay(500 * index).fadeIn(500);
                    });
            },
            complete: function(){
                $('#loader').hide();
            }
        })
 })

 $(function(){
    $.ajax({
        url: "data/data.json",
        type: "get",
        beforeSend: function(){
            $('#loader').show();
        },
        success: function(data){
            let displaydata = document.getElementById("coding_link_second_row");
 
            let html = " ";
                for (let i in data.coding_link_second_row) {

                    html += "<div class='row code2'>";
                    html += "<a href='load-item.html'><div class='lang-logo'>";
                    html += "<img src='" + data.coding_link_second_row[i].logo + "'/>";
                    html += "<div><p>" + data.coding_link_second_row[i].title + "</p></div>";
                    html += "<div class='rating'><p><span style='margin-right:7px;'>" + data.coding_link_second_row[i].star + "</span> " + data.coding_link_second_row[i].rating + "</p></div>";
                    html += "<div class='cash'>" + data.coding_link_second_row[i].amount + "</p></div>";
                    html += "</div></a>";
                    html += "</div>";
                }
    
                displaydata.innerHTML = html;
                $('.code2').hide().each(function(index){
                    $(this).delay(500 * index).fadeIn(500);
                });
        },
        complete: function(){
            $('#loader').hide();
        }
    })
})

$(function(){
    $.ajax({
        url: "data/data.json",
        type: "get",
        beforeSend: function(){
            $('#loader').show();
        },
        success: function(data){
 
            let displaydata = document.getElementById("coding_link_third_row");
 
            let html = " ";
                for (let i in data.coding_link_third_row) {
        
                    html += "<div class='row code3'>";
                    html += "<a href='load-item.html'><div class='lang-logo'>";
                    html += "<img src='" + data.coding_link_third_row[i].logo + "'/>";
                    html += "<div><p>" + data.coding_link_third_row[i].title + "</p></div>";
                    html += "<div class='rating'><p><span style='margin-right:7px;'>" + data.coding_link_third_row[i].star + "</span> " + data.coding_link_third_row[i].rating + "</p></div>";
                    html += "<div class='cash'>" + data.coding_link_third_row[i].amount + "</p></div>";
                    html += "</div></a>";
                    html += "</div>";
                }
    
                displaydata.innerHTML = html;
                $('.code3').hide().each(function(index){
                    $(this).delay(500 * index).fadeIn(500);
                });
        },
        complete: function(){
            $('#loader').hide();
        }
    })
})


$(function(){
    $.ajax({
        url: "data/data.json",
        type: "get",
        beforeSend: function(){
            $('#loader').show();
        },
        success: function(data){
 
            let displaydata = document.getElementById("gaming_link_first_row");
            
            let html = " ";
                html += "<div class='long-box'>";
                html += "<p>The most popular selection<br>of courses<br>choose everything is free</p>";
                html += "</div>";
                for (let i in data.gaming_link_first_row) {

                    html += "<div class='row'>";
                    html += "<a href='load-item.html'><div class='lang-logo'>";
                    html += "<img src='" + data.gaming_link_first_row[i].logo + "'/>";
                    html += "<div><p>" + data.gaming_link_first_row[i].title + "</p></div>";
                    html += "<div class='rating'><p><span style='margin-right:7px;'>" + data.gaming_link_first_row[i].star + "</span> " + data.gaming_link_first_row[i].rating + "</p></div>";
                    html += "<div class='cash'>" + data.gaming_link_first_row[i].amount + "</p></div>";
                    html += "</div></a>";
                    html += "</div>";
                }
    
                displaydata.innerHTML = html;
                $('.row').hide().each(function(index){
                    $(this).delay(500 * index).fadeIn(500);
                });
        },
        complete: function(){
            $('#loader').hide();
        }
    })
})
