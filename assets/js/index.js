$(function() {
    getUserList()
    $('#btnLogin').on('click', function() {
        var layer = layui.layer
        layer.confirm('确定退出登陆？', {
            icon: 3,
            title: '提示'
        }, function(index) {
            //do something
            localStorage.removeItem('token')
            location.href = 'login.html'
            layer.close(index);
        });
    })
})

function getUserList() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取信息失败！')
            }
            renderAvatar(res.data)
        },
        //设置访问权限
        // complete: function(res) {
        //     console.log(res);
        //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //         localStorage.removeItem('token')
        //         location.href = '/login.html'
        //     }
        // }
    })
}

window.getUserList = getUserList

function renderAvatar(user) {
    var name = user.nickname || user.username
    $('.welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        var first = name[0].toUpperCase()
        $('.layui-nav-img').hide()
        $('.text-avatar').html(first).show()
    }
}