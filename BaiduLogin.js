/**
 * Created by yunlo on 2017/1/18.
 */

function tabContentSwitch(tabId) {
    $(".s-content").css("display","none");
    $("#s_content_"+tabId).css("display","block");
}



$(document).ready(function () {
    $(".s-menu-item").click(function (event) {
        $(".s-menu-item").removeClass("current");
        $(this).addClass("current");
        var tabId = $(this).attr("id");
        if(tabId=="s-menu-mine")
        {
            tabId="100";
        }
        tabContentSwitch(tabId);
    });
    callSkin();
    clipSkin();
    loadBackground();
    addEventToSkinChange();
    $("#2").click();

});

//call skin change and clip
function callSkin(){
    $(".skin").click(function () {
       $("#s_skin_layer").animate({top:0});
    });
}
function clipSkin(){
    $(".s-skin-up").click(function () {
        $("#s_skin_layer").animate({top:-500});
    });
}

//record skin change and change skin
//use cookie
function setCookie(name,value,time){
    var exp = new Date();
    exp.setTime(exp.getTime()+time);
    document.cookie = name+"="+value+";expires="+exp.toDateString();
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return (arr[2]);
    else
        return null;
}

function loadBackground()
{
    var wallpaper = getCookie("wallpaper");
    if(wallpaper==null)
    {
        $("#skin").css("background-image","./img/136.jpg");
    }
    else
    {
        var urlstr = "url("+wallpaper+")";
        $("#skin").css("background-image",urlstr);
    }
}

function setBackground(image) {
    setCookie("wallpaper",image,10000);
    var urlstr = "url("+image+")";
    $("#skin").css("background-image",urlstr);
}

//add setBackground to skin change("")
function addEventToSkinChange(){
    $(".skin-img-item").click(function () {
        console.log(this);
        var img = $(this).find("img");
        // var newwallpaper = $(this).find("img").attr("src");
        var newwallpaper = "https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/skin/834.jpg?2";
        setBackground(newwallpaper);

    });
}