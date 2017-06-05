/**
 * Created by chenyunqing on 2016/6/14.
 */
$(function () {
    var sildeheight = $(window).height();
   $(".slide.bdbri.bdbriimg").css({'minHeight':sildeheight
   });
//    移动到按钮上显示内容
    moreproductdisplay();
//    窗口改变时改变侧边条的高度
    resizeslideChange();
});

function moreproductdisplay() {
    $('#moreproduct').mouseenter(function () {
        $(".slide.bdbri.bdbriimg").css({"display":"block"});
    });
    $('.slide.bdbri.bdbriimg').mouseleave(function () {
        $(".slide.bdbri.bdbriimg").css({"display":"none"});
    });
}

function resizeslideChange() {
    $(window).resize(function () {
        var sildeheight = $(window).height();
        $(".slide.bdbri.bdbriimg").css({'minHeight':sildeheight
        });
    });
}

