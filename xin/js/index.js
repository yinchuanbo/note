// var mySwiper = new Swiper('.swiper-container', {
//     direction : 'vertical',
//     mousewheel: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       effect : 'fade',
//       parallax : true,
//       pagination: {
//         el: '.swiper-pagination',
//         type : 'bullets',
//       },
// })





var myAudio = document.getElementById('pausevideo');


$(function () {
    // 报名
    $(".btn").bind("click", function () {
        var _this = $(this);
        var _name = $("[name='name']").val();
        var _mobile = $("[name='phone']").val();
        var tg_source = getQueryString("tg_source");
        if (_name == "") {
            $("body").append('<div class="ajax-hint">姓名不能为空</div>')
            setTimeout(function () {
                $(".ajax-hint").remove();
            }, 2000)
        } else if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(_mobile)) {
            $("body").append('<div class="ajax-hint">请输入正确的电话号码</div>')
            setTimeout(function () {
                $(".ajax-hint").remove();
            }, 2000)
        } else {
            $.ajax({
                url: "https://www.babasuper.com/tgkc/newEnergy/baoming.html",
                type: "post",
                dataType: "json",
                data: {
                    name: _name,
                    mobile: _mobile,
                    tg_source: tg_source
                },
                success: function (json) {
                    if (json && json.success) {
                        $("body").append('<div class="ajax-hint">预约成功！请保持手机畅通</div>')
                        setTimeout(function () {
                            $(".ajax-hint").remove();
                        }, 2000)
                        // $(".driving-form-fix-box").removeClass("active");
                    } else {
                        $("body").append('<div class="ajax-hint">' + json.msg + '</div>')
                        setTimeout(function () {
                            $(".ajax-hint").remove();
                        }, 2000)
                        // $(".driving-form-fix-box").removeClass("active");
                    }
                },
                error: function (err) {
                    $("body").append('<div class="ajax-hint">网络异常</div>')
                    setTimeout(function () {
                        $(".ajax-hint").remove();
                    }, 2000)
                }
            });
        }
    })

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

});
