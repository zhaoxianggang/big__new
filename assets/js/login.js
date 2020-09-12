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
    var layer = layui.layer
    form.verify({
        psd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repsd: function(value) {
            var psd = $('#psd').val()
            if (psd !== value) {
                return '两次密码不一致！'
            }
        }
    })
    $('#form_reg').on('submit', function(e) {
        // var data = {
        //username: $('#form_reg [name=username]').val(),
        // password: $('#form_reg [name=password]').val()
        // }
        e.preventDefault()
        $.post('/api/reguser', $(this).serialize(), function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            $('#link-reg').click()
        })
    })
    $('#login_reg').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登陆失败！')
                }
                layer.msg('登陆成功！')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })
})