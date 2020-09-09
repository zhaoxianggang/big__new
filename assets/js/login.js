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
})