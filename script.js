$(document).ready(function () {
  $(".filter-btn").click(function () {
    let filter = $(this).data("filter");

    $(".filter-btn").removeClass("btn-primary").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");

    $(".gallery-item").each(function () {
      let category = $(this).data("category");

      if (filter === "all" || category === filter) {
        $(this).stop().fadeIn(1000);
      } else {
        $(this).stop().fadeOut(1000);
      }
    });
  });
});