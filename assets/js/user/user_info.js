$(function() {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function(value) {
            if (value.length >= 6) {
                return '用户昵称必须在 1 -6 个之间'
            }
        }
    })

    // 获取用户基本信息

    initUserinfo()

    function initUserinfo() {
        $.ajax({
            url: '/my/userinfo',
            method: 'get',
            success: function(res) {
                if (res.status !== 0) {

                    return layer.msg(res.message)
                }

                // 利用 form.val()为表单赋值

                form.val('formUserInfo', res.data)
            }
        })
    }

    // 重置表单

    $('#resetBtn').on('click', function(e) {
        e.preventDefault()
        initUserinfo()
    })

    $('#changeUserInfo').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/my/userinfo',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                if (res.ststus !== 0) {
                    return layer.msg(res.message)
                }

                //iframe显示的页面为子页面，调用父页面的方法需要使用
                //window.parent.方法
                window.parent.getUserList()
            }
        })
    })

})