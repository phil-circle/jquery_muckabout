$(document).ready(function() {
    $(".photo").draggable({
      containment: "#parent",
      scroll: false
    });

    $(".photo").resizable({
      aspectRatio: true
    });
});
