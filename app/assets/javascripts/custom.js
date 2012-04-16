// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//

// require_tree .

$(document).ready(function() {

  $('#account_dropdown_href').live('click', function() {
    if($('#account_dropdown').css("display") != "none") {
      $("#account_dropdown").hide();
    } else {
      $("#account_dropdown").show();
    }
    return false;
  })

  $("#non_fb_register").live('click', function() {
    document.fb_signup_form.submit();
  })

  // signup campaign
  $("#submit_campaign_form").live('click', function() {    
    if($.trim($("#campaign_name").val()) == "") {
      $("#campaign_name").addClass("sw_error");
    } else {
      $("#campaign_name").removeClass("sw_error");
    }

    if($.trim($("#campaign_url").val()) == "") {
      $("#campaign_url").addClass("sw_error");
    } else {
      $("#campaign_url").removeClass("sw_error");
    }

    if($.trim($("#campaign_type").val()) == "") {
      $("#campaign_type").addClass("sw_error");
    } else {
      $("#campaign_type").removeClass("sw_error");
    }

    if($.trim($("#campaign_address").val()) == "") {
      $("#campaign_address").addClass("sw_error");
    } else {
      $("#campaign_address").removeClass("sw_error");
    }

    if($.trim($("#campaign_zip_code").val()) == "") {
      $("#campaign_zip_code").addClass("sw_error");
    } else {
      $("#campaign_zip_code").removeClass("sw_error");
    }

    if($.trim($("#campaign_phone").val()) == "") {
      $("#campaign_phone").addClass("sw_error");
    } else {
      $("#campaign_phone").removeClass("sw_error");
    }
    if($(".sw_error").size() > 0) {
      $(".error_box").text("Marked fields are mandatory");
    }
    else {
      jQuery.ajax({
        data : {},
        dataType : "text",
        type : 'get',
        url : '/check_url/' + $.trim($("#campaign_url").val()) ,
        success : function(text) {
          if(text == "1") {
            $("#campaign_url").addClass("sw_error");
            $(".error_box").text("Sorry, that URL is taken.");
          } else if(text == "2") {
            document.campaign_form.submit();
          }
        }
      })
    }
  })
	
	
  // signup level
	
  $("#level_submit").live('click', function() {
    document.level_form.submit();
  })

  // add photo from local

  $("#add_photo_from_local").live('click', function() {
    $("#photo_from_web").hide();
    $("#photo_from_local").show();
    return false;
  })

  // add photo from web
  $("#add_photo_from_web").live('click', function() {
    $("#photo_from_local").hide();
    $("#photo_from_web").show();
    return false;
  })

  $("#upload_pic_url").live('click', function() {    
    if (validateURL($("#photo_cover_image_url").val())) {
      $("#photo_cover_image_url").removeClass("sw_error");
      $("#uploaded_cause_pic").attr("src", "/images/ajax_circle_blue.gif")
      $("#submit_from_web").click();      
    }
    else {
      $("#photo_cover_image_url").addClass("sw_error");
    }
  })

  $("#upload_pic_local").live('click', function() {
    $("#uploaded_cause_pic").attr("src", "/images/ajax_circle_blue.gif")
    $("#submit_from_local").click();
  })

  $("#cause_settings").live('click', function() {
    jQuery.facebox({
      ajax: '/setting'
    });
    return false;
  })

  $(".grey_btn").live('click', function() {
    jQuery(document).trigger('close.facebox');
    return false;
  })

  $("#campaign_setting_submit").live('click', function() {    
    if($.trim($("#campaign_name").val()) == "") {
      $("#campaign_name").addClass("sw_error");
    }
    else {
      $("#campaign_name").removeClass("sw_error");
    }

    if($.trim($("#campaign_url").val()) == "") {
      $("#campaign_url").addClass("sw_error");
    }
    else {
      $("#campaign_url").removeClass("sw_error");
    }

    if($(".sw_error").size() > 0) {
      $(".error_box").text("This field is required.");
    }
    else {
      jQuery.ajax({
        data : {},
        dataType : "text",
        type : 'get',
        url : '/check_valid_url/' + $.trim($("#campaign_url").val()) ,
        success : function(text) {
          if(text == "1") {
            $("#campaign_url").addClass("sw_error");
            $(".error_box").text("Sorry, that URL is taken.");
          } else if(text == "2") {            
            document.campaign_setting_form.submit();
          }
        }
      })
    }
    return false;
  })

  $(".cause_media_empty").live('click', function() {
    return false;
  })


  $(".cause_media_empty_photo").live('click', function() {
    $("#image_id").val($(this).attr("id"));
    $('#photo_cover_image').click();
    return false;
  })

  $("#photo_cover_image").change(function() {    
    $("#submit_from_local").click();
  });
  
  $(".import_options li a").live('click', function() {
    jQuery.facebox({
      ajax: '/import_contact'
    });
    return false;
  });
})

function validateURL(textval) {
  var urlregex = new RegExp(
    "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
  return urlregex.test(textval);
}
