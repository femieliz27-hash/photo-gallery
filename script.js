$(document).ready(function() {
  $(".gallery-img").click(function() {
    let imgSrc = $(this).attr("src");
    $("#modalImage").attr("src", imgSrc);
    $("#imageModal").modal("show");
  });
});
