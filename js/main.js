function validate(input) {
  if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
    if (
      $(input)
        .val()
        .trim()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    if (
      $(input)
        .val()
        .trim() == ""
    ) {
      return false;
    } else {
      return true;
    }
  }
}
(function($) {
  "use strict";

  /*==================================================================
    [ Focus input ]*/
  $(".input100").each(function() {
    $(this).on("blur", function() {
      if (
        $(this)
          .val()
          .trim() != ""
      ) {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  // $(".validate-form").on("submit", function() {
  //   var check = true;

  //   for (var i = 0; i < input.length; i++) {
  //     if (validate(input[i]) == false) {
  //       showValidate(input[i]);
  //       check = false;
  //     }
  //   }

  //   return check;
  // });

  // $(".validate-form .input100").each(function() {
  //   $(this).focus(function() {
  //     hideValidate(this);
  //   });
  // });

  // function showValidate(input) {
  //   var thisAlert = $(input).parent();

  //   $(thisAlert).addClass("alert-validate");
  // }

  // function hideValidate(input) {
  //   var thisAlert = $(input).parent();

  //   $(thisAlert).removeClass("alert-validate");
  // }
})(jQuery);
