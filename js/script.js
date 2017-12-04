  $(document).ready(function(){
    // Deactivate the current tab and activate the clicked tab
    $( ".tabs ul li" ).click(function() {
      ($('.tabs ul li.active')).toggleClass("active");
      $(this).toggleClass("active");
      var index = ($('.tabs ul li.active'))[0].getAttribute("data-index");
      // Get all 4 descriptions
      var descriptions = document.getElementsByClassName("description")[0].
                      getElementsByTagName("DIV");
      // Find and disable current active description block
      for ( var i = 0; i < descriptions.length; i++ )
      {
        if ( $(descriptions[i]).hasClass( "active" ) )
        {
          $(descriptions[i]).removeClass("active");
          $(descriptions[i]).addClass("hide");
          break;
        }
      }
      $(descriptions[index]).toggleClass('hide');
      $(descriptions[index]).addClass('active');

    var screenshots = document.getElementsByClassName("screenshots")[0].
                       getElementsByTagName("li");
     for ( var i = 0; i < screenshots.length; i++ )
     {
       if ( $(screenshots[i]).hasClass( "active" ) )
       {
         $(screenshots[i]).removeClass("active");
         $(screenshots[i]).addClass("hide");
         break;
       }
     }
     var index = ($('.tabs ul li.active'))[0].getAttribute("data-index");
     $(screenshots[index]).removeClass('hide');
     $(screenshots[index]).addClass('active');
    });


      // Change the background from background image to white for header
      // when scrolled past a certain point
    function revealHeader(){
        var scrollTop = $(window).scrollTop();
        var header = document.getElementsByClassName("header")[0];
        console.log(scrollTop);
        if(scrollTop >= 20){
          $(header).css("background", "#fff");
          $(header).css("box-shadow", "0 1px 4px 0 rgba(99,114,130,0.15)");
        }
        else if(scrollTop === 0){
          $(header).css("background", "");
          $(header).css("box-shadow", "");
        }
    }

    window.onscroll = function() {revealHeader()};

  });
