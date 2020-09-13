$(function() {
    var layer = layui.layer
    $('#btnEnd').on('click', function(e) {
        e.preventDefault()
        layer.confirm('是否退出登陆？', { icon: 3, title: '提示' }, function(index) {
            //do something
            localStorage.removeItem('token')
            location.href = 'login.html'
            layer.close(index);
        })
    })
    
})