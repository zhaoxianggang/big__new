$(function() {
    // 点击注册链接

    $('#link-login').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击登陆链接

    $('#link-reg').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    form.verify({
        psd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repsd: function(value) {
            var psd = $('#psd').val()
            if (psd !== value) {
                return '两次密码不一致！'
            }
        }
    })
})