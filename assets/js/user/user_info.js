$(function () {
    let form = layui.form;
    getInof();
    function getInof() {
        $.ajax({
            url: "/my/userinfo",
            success: function (res) {
                if (res.status !== 0) {
                    return layui.msg('获取用户信息失败');
                }
                form.val('userForm', res.data);

            }
        })

    }

    $('#resetBtn').click(function (e) {
        e.preventDefault();
        getInof();


    })

})