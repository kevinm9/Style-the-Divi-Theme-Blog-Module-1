<script>
  (function ($) {
    $(document).ready(function () {
      $(document).bind('ready ajaxComplete', function () {
        $(".pa-blog .et_pb_post").each(function () {
        $(this).find(".post-meta").detach().appendTo($(this).find(".et_pb_image_container"));
        });
      });
    });
  })(jQuery); 
</script>