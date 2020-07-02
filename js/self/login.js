function check_login() {
  var name = $("#user_name").val();
  var pass = $("#password").val();
  if (name == "" && pass == "") {
    $("#login_content").removeClass('shake_effect');
    setTimeout(function () {
      $("#login_content").addClass('shake_effect')
    }, 1);
  }
  else {
    $.ajax({
      type: "post",
      url: "",
      async: true,
      dataType: "json",
      data: $("#login_form").serialize(),
      success: function (message) {
        if (message.rspCode == 1) {
          window.location.href = "index.html";
        } else if (message.rspCode == -1) {
          alert(alert(message.rspMsg));
        }
      }
    });
  }
}
$(function () {
  $("#login").click(function () {
    check_login();
    return false;
  })
})