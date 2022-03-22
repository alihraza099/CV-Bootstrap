console.log("Attached");
$(function () {
    //this code will be executed on document ready
    $("body").on("click", targetLocked);
  });
  function targetLocked(e)
  {
      if(e.target.classList.contains("gallery-item")){
          let src = e.target.getAttribute("src");
          $('.modal-img').attr('src', src);
        //   $("").src = src ;
        //   $("#gallery-modal").show();
          $("#gallery-modal").modal('show');
        $("#close").modal("hide");
        // $("#close").hide(); 
      }
  }