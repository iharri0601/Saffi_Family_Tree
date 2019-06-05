$(".saffi-toggle").click(function() {
 $(".kenshiro-family").hide();
 $(".polyphemus-family").hide();
 $(".saffi-family").show();
});
$(".kenshiro-toggle").click(function() {
  $(".saffi-family").hide();
  $(".polyphemus-family").hide();
  $(".kenshiro-family").show();
});
$(".polyphemus-toggle").click(function() {
  $(".saffi-family").hide();
  $(".kenshiro-family").hide();
  $(".polyphemus-family").show();
});
