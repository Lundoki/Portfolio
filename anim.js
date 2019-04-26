$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1000,
    delay: function(el, i) {
      return 50 * i;
    }
  });

  $(function () {
    $('#myTab li:last-child a').tab('show')
  })

  ScrollReveal().reveal('.rev', { delay: 300 });


