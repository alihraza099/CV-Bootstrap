$(function () {
  //this code will be executed on document ready
  $("body").on("click", targetLocked);
  $(".close").on("click", function () {
    $("#gallery-modal").modal("hide");
  });
  
});

function targetLocked(e) {
  if (e.target.classList.contains("gallery-item")) {
    let src = e.target.getAttribute("src");
    $(".modal-img").attr("src", src);
    $("#gallery-modal").modal("show");
  }
}
