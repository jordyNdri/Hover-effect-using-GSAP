$(document).ready(function() {
  // alert('document ready');

  /*
    TweenMax.set(".project-preview", { width: 0 });

    var t1 = new Timelinelite();

    $(document)
    .on("mouseover", ".navigation-item", function(evt) {

        alert('mouseover');

        t1 = new Timelinelite();
        t1.to($(".project-preview"), 1, {
            width: "50%",
            ease: Expo.easeInOut
        });
    })
    .on("mouseout", ".navigation-item", function(evt) {

        alert('mouseout');

        t1 = new Timelinelite();
        t1.to($(".project-preview"), 0.5, {
            width: 0,
            ease: Expo.easeInOut
        });
    });
    */

  $('.navigation-link-1').hover(function() {
    // $("#project-preview").css({ "background": url("../assets/images/1_acZ1mwCJ_jA17TWZUvIZeA.jpeg") });
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img1');
  });

  $('.navigation-link-2').hover(function() {
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img2');
  });
  $('.navigation-link-3').hover(function() {
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img3');
  });
  $('.navigation-link-4').hover(function() {
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img4');
  });
  $('.navigation-link-5').hover(function() {
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img5');
  });
  $('.navigation-link-6').hover(function() {
    $('#project-preview').removeClass();
    $('#project-preview').addClass('project-preview-img6');
  });
});
