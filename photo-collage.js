$(document).ready(function() {
    $(".photo").draggable({
      containment: "#parent",
      scroll: false
    });

    $(".resizable").resizable({
      aspectRatio: true
    });
});
// interesting to note the buggy-ness of this. Have messed around with this a bit and found:
// 1. when both set to div class .photo: draggable works (althoug this time the containment does not appear to)
// resizable seems to act on the div rather than the image (image not filling the div?)
// perhaps to do with .photo styling **

// 2. when draggable is set to act on .draggable (img class)
// this works - including containment - but resizable does not. The resizable icon gets left where it started on the page.

// 3. when resizable is set to act on .resizable (img class) (as well):
// resizable works but draggable doesn't.
// AND when draggable set to .photo whilst resizable set to .resizable:
// IT WORKS!
