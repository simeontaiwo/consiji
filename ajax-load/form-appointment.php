<?php ?>
<section class="">
  <div class="container position-relative p-0 mt-90" style="max-width: 700px;">
    <h3 class="bg-theme-colored p-15 mt-0 mb-0 text-white">Get A Quote</h3>
    <div class="section-content bg-white p-30">
      <div class="row">
        <div class="col-md-12">
          <!-- Booking Form Starts -->
          <p class="lead">Send us a message, we will get back to you immediately.</p>
          <!-- Appointment Form -->
          <form id="popup_appointment_form" name="popup_appointment_form" class="" method="">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input name="form_name" id="form_name" class="form-control" type="text" required="" placeholder="Enter Name" aria-required="true">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input name="form_email" id="form_email" class="form-control required email" type="email" placeholder="Enter Email" aria-required="true">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input name="form_number" id="form_number" class="form-control required" type="tel" placeholder="Enter Phone Number" aria-required="true">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input name="form_subject" id="form_subject" class="form-control required" type="text" placeholder="Subject of Inquiry" aria-required="true">
                </div>
              </div>
            </div>
            <div class="form-group mb-10">
              <textarea name="form_message" id="form_message" class="form-control required" placeholder="Enter Message" rows="5" aria-required="true"></textarea>
            </div>
            <div class="form-group mb-0 mt-20">
              <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
              <button type="submit" id="submitBtn" class="btn btn-dark btn-theme-colored" data-loading-text="Please wait...">Send Message</button>
            </div>
          </form>



          <!-- Appointment Form Validation-->
          <script type="text/javascript">
            $("#popup_appointment_form").validate({
              submitHandler: function(form) {
                var form_btn = $(form).find('button[type="submit"]');
                var form_result_div = '#form-result';
                var name = $("#form_name").val();
                var email = $("#form_email").val();
                var number = $("#form_number").val();
                var subject = $("#form_subject").val();
                var message = $("#form_message").val();

                $(form_result_div).remove();
                form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                var form_btn_old_msg = form_btn.html();
                form_btn.html(form_btn.prop('disabled', true).data("loading-text"));

                var dataString = 'name=' + name + '&email=' + email + '&number=' + number + '&subject=' + subject + '&message' + message;
                alert(dataString);

                $(form).ajaxSubmit({
                  type: "POST",
                  url: "../form-handler.php",
                  data: dataString,
                  dataType : 'json',
                  success: function(data) {
                    if (data.success == 'true') {
                      $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function() {
                      $(form_result_div).fadeOut('slow')
                    }, 6000);
                  }
                });
                return false;
              }
            });
          </script>
        </div>
      </div>
    </div>
    <button title="Close (Esc)" type="button" class="mfp-close font-36">×</button>
  </div>
</section>