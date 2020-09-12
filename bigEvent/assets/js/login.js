$(function() {
    $('.login_link').on('click', function() {
        $('.login_box').hide()
        $('.reg_box').show()
    })
    $('.reg_link').on('click', function() {
        $('.login_box').show()
        $('.reg_box').hide()
    })
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repass: function(value) {
            var psd = $('.reg_box [name=password]').val()
            if (value !== psd) {
                return '两次密码不一致！'
            }
        }
    })
    $('#reg_form').on('submit', function(e) {
        e.preventDefalut()
        $.ajax({
            url: '/api/reguser',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
            }
        })
    })
})