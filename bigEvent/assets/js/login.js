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
        e.preventDefault()
        $.post('/api/reguser', $(this).serialize(), function(res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功！请登录')
            $('.reg_link').click()
        })
    })

    $('#login_form').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('登陆成功！')
                localStorage.setItem('token', res.token)
                location.href = './index.html'
            }
        })
    })
})