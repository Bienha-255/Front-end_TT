var CORRECT_USER ='admin';
var CORRECT_PASS ='admin';

 $('#submit').on('click', function (){
    var inputUserName = $('#username').val();
    var inputPass = $('#password').val();

    var status = true;
    if (inputUserName == '') {
        $('#user_err').html('Tài khoản và mật khẩu không được để trống!');
        status = false;
    }
    if (inputPass==''){
        $('#pass_err').html('Tài khoản và mật khẩu không được để trống!');
        status =false;
    }
    if(inputUserName != 'admin'){
        $('#user_err').html('Tài khoản hoặc mật khẩu không chính xác!');
        status=false;
    }
    if(inputPass != 'admin'){
        $('#pass_err').html('Tài khoản hoặc mật khẩu không chính xác!');
        status = false;
    }

    if (status == true) {
        $('#back_btn').html('Đăng nhập thành công!');
        $('#myModal').modal('hide');
    }
 })


