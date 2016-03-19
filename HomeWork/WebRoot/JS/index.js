/**
 * Created by ricardo on 16-3-19.
 */
var i = 0;
$(document).ready(function(){
    var con = 0;
    var width = window.outerWidth;
    var height = window.innerHeight;
    $("body").css({"width":width,"height":height});
    $("#home").css({"width":width,"height":height});
    $("#individual").css({"width":width,"height":height});
    $("#contact").css({"width":width,"height":height});
    $("#about").css({"width":width,"height":height});
    $("#controler").button({
        icons:  {
            primary:    "ui-icon-plusthick"
        }
    });
    console.log("con0="+con);
    console.log("i0="+i);
    $("#controler").click(function () {
        switch (con){
            case 0:
                con = 1;
                console.log("con1="+con);
                console.log("i1="+i);
                // controlerAt();
                // click0();
                switch (i) {
                    case 0:
                        controlerAt();
                        click0();
                        break
                    case 1:
                        controlerAt();
                        click1();
                        break
                    case 2:
                        controlerAt();
                        click2();
                        break
                    case 3:
                        controlerAt();
                        click3();
                        break
                }
                $("#home").click(function () {
                    controlerAs();
                    clickHomeS();
                    con =0;
                    i = 0;
                })
                $("#individual").click(function () {
                    controlerAs();
                    clickIndividualS();
                    con =0;
                    i = 1;
                })
                $("#contact").click(function () {
                    controlerAs();
                    clickContactS();
                    con =0;
                    i = 2;
                })
                $("#about").click(function () {
                    controlerAs();
                    clickAboutS();
                    con =0;
                    i = 3;
                })
                break;
            case 1:
                con = 0;
                console.log("con3="+con);
                console.log("i3="+i);
                // controlerAs()
                // clickHomeS();
                switch (i) {
                    case 0:
                        controlerAs();
                        clickHomeS();
                        break;
                    case 1:
                        controlerAs();
                        clickIndividualS();
                        break;
                    case 2:
                        controlerAs();
                        clickContactS();
                        break;
                    case 3:
                        controlerAs();
                        clickAboutS();
                        break;
                }
                break;
        }
    });
});

//控制按钮打开
function controlerAt() {
    $("#controler").button("destroy");
    $("#controler").button({
        icons:  {
            primary:    "ui-icon-minusthick"
        }
    });

}

//控制按钮关闭
function controlerAs(){
    $("#controler").button("destroy");
    $("#controler").button({
        icons:  {
            primary:    "ui-icon-plusthick"
        }
    });
}

//动画情况1：初始状态和home点击后的状态
function click0() {

    $("#home").css({
        "animation":"homeA 1s ease forwards",
        "-moz-animation":"homeA 1s ease forwards",
        "-webkit-animation":"homeA 1s ease forwards",
        "-o-animation":"homeA 1s ease forwards"});
    $("#individual").css({
        "animation":"individualA 1s ease forwards",
        "-moz-animation":"individualA 1s ease forwards",
        "-webkit-animation":"individualA 1s ease forwards",
        "-o-animation":"individualA 1s ease forwards"});
    $("#contact").css({
        "animation":"contactA 1s ease forwards",
        "-moz-animation":"contactA 1s ease forwards",
        "-webkit-animation":"contactA 1s ease forwards",
        "-o-animation":"contactA 1s ease forwards"});
    $("#about").css({
        "animation":"aboutA 1s ease forwards",
        "-moz-animation":"aboutA 1s ease forwards",
        "-webkit-animation":"aboutA 1s ease forwards",
        "-o-animation":"aboutA 1s ease forwards"});
}

//动画情况2：点击individual后的状态
function click1() {

    $("#home").css({
        "animation":"homeD 1s ease forwards",
        "-moz-animation":"homeD 1s ease forwards",
        "-webkit-animation":"homeD 1s ease forwards",
        "-o-animation":"homeD 1s ease forwards"});
    $("#individual").css({
        "animation":"individualA 1s ease forwards",
        "-moz-animation":"individualA 1s ease forwards",
        "-webkit-animation":"individualA 1s ease forwards",
        "-o-animation":"individualA 1s ease forwards"});
    $("#contact").css({
        "animation":"contactA 1s ease forwards",
        "-moz-animation":"contactA 1s ease forwards",
        "-webkit-animation":"contactA 1s ease forwards",
        "-o-animation":"contactA 1s ease forwards"});
    $("#about").css({
        "animation":"aboutA 1s ease forwards",
        "-moz-animation":"aboutA 1s ease forwards",
        "-webkit-animation":"aboutA 1s ease forwards",
        "-o-animation":"aboutA 1s ease forwards"});
}

//动画情况3：点击contact后的状态
function click2() {

    $("#home").css({
        "animation":"homeD 1s ease forwards",
        "-moz-animation":"homeD 1s ease forwards",
        "-webkit-animation":"homeD 1s ease forwards",
        "-o-animation":"homeD 1s ease forwards"});
    $("#individual").css({
        "animation":"individualD 1s ease forwards",
        "-moz-animation":"individualD 1s ease forwards",
        "-webkit-animation":"individualD 1s ease forwards",
        "-o-animation":"individualD 1s ease forwards"});
    $("#contact").css({
        "animation":"contactA 1s ease forwards",
        "-moz-animation":"contactA 1s ease forwards",
        "-webkit-animation":"contactA 1s ease forwards",
        "-o-animation":"contactA 1s ease forwards"});
    $("#about").css({
        "animation":"aboutA 1s ease forwards",
        "-moz-animation":"aboutA 1s ease forwards",
        "-webkit-animation":"aboutA 1s ease forwards",
        "-o-animation":"aboutA 1s ease forwards"});
}

//动画情况4：点击about后的状态
function click3() {

    $("#home").css({
        "animation":"homeD 1s ease forwards",
        "-moz-animation":"homeD 1s ease forwards",
        "-webkit-animation":"homeD 1s ease forwards",
        "-o-animation":"homeD 1s ease forwards"});
    $("#individual").css({
        "animation":"individualD 1s ease forwards",
        "-moz-animation":"individualD 1s ease forwards",
        "-webkit-animation":"individualD 1s ease forwards",
        "-o-animation":"individualD 1s ease forwards"});
    $("#contact").css({
        "animation":"contactD 1s ease forwards",
        "-moz-animation":"contactD 1s ease forwards",
        "-webkit-animation":"contactD 1s ease forwards",
        "-o-animation":"contactD 1s ease forwards"});
    $("#about").css({
        "animation":"aboutA 1s ease forwards",
        "-moz-animation":"aboutA 1s ease forwards",
        "-webkit-animation":"aboutA 1s ease forwards",
        "-o-animation":"aboutA 1s ease forwards"});
}

//home页面点击动画
function clickHomeS() {

    $("#home").css({
        "animation":"homeB 1s ease forwards",
        "-moz-animation":"homeB 1s ease forwards",
        "-webkit-animation":"homeB 1s ease forwards",
        "-o-animation":"homeB 1s ease forwards"});
    $("#individual").css({
        "animation":"individualB 1s ease forwards",
        "-moz-animation":"individualB 1s ease forwards",
        "-webkit-animation":"individualB 1s ease forwards",
        "-o-animation":"individualB 1s ease forwards"});
    $("#contact").css({
        "animation":"contactB 1s ease forwards",
        "-moz-animation":"contactB 1s ease forwards",
        "-webkit-animation":"contactB 1s ease forwards",
        "-o-animation":"contactB 1s ease forwards"});
    $("#about").css({
        "animation":"aboutB 1s ease forwards",
        "-moz-animation":"aboutB 1s ease forwards",
        "-webkit-animation":"aboutB 1s ease forwards",
        "-o-animation":"aboutB 1s ease forwards"});
}

//individual页面点击动画
function clickIndividualS() {

    $("#home").css({
        "animation":"homeC 1s ease forwards",
        "-moz-animation":"homeC 1s ease forwards",
        "-webkit-animation":"homeC 1s ease forwards",
        "-o-animation":"homeC 1s ease forwards"});
    $("#individual").css({
        "animation":"individualB 1s ease forwards",
        "-moz-animation":"individualB 1s ease forwards",
        "-webkit-animation":"individualB 1s ease forwards",
        "-o-animation":"individualB 1s ease forwards"});
    $("#contact").css({
        "animation":"contactB 1s ease forwards",
        "-moz-animation":"contactB 1s ease forwards",
        "-webkit-animation":"contactB 1s ease forwards",
        "-o-animation":"contactB 1s ease forwards"});
    $("#about").css({
        "animation":"aboutB 1s ease forwards",
        "-moz-animation":"aboutB 1s ease forwards",
        "-webkit-animation":"aboutB 1s ease forwards",
        "-o-animation":"aboutB 1s ease forwards"});
}

//contact页面点击动画
function clickContactS() {

    $("#home").css({
        "animation":"homeC 1s ease forwards",
        "-moz-animation":"homeC 1s ease forwards",
        "-webkit-animation":"homeC 1s ease forwards",
        "-o-animation":"homeC 1s ease forwards"});
    $("#individual").css({
        "animation":"individualC 1s ease forwards",
        "-moz-animation":"individualC 1s ease forwards",
        "-webkit-animation":"individualC 1s ease forwards",
        "-o-animation":"individualC 1s ease forwards"});
    $("#contact").css({
        "animation":"contactB 1s ease forwards",
        "-moz-animation":"contactB 1s ease forwards",
        "-webkit-animation":"contactB 1s ease forwards",
        "-o-animation":"contactB 1s ease forwards"});
    $("#about").css({
        "animation":"aboutB 1s ease forwards",
        "-moz-animation":"aboutB 1s ease forwards",
        "-webkit-animation":"aboutB 1s ease forwards",
        "-o-animation":"aboutB 1s ease forwards"});
}

//about页面点击动画
function clickAboutS() {

    $("#home").css({
        "animation":"homeC 1s ease forwards",
        "-moz-animation":"homeC 1s ease forwards",
        "-webkit-animation":"homeC 1s ease forwards",
        "-o-animation":"homeC 1s ease forwards"});
    $("#individual").css({
        "animation":"individualC 1s ease forwards",
        "-moz-animation":"individualC 1s ease forwards",
        "-webkit-animation":"individualC 1s ease forwards",
        "-o-animation":"individualC 1s ease forwards"});
    $("#contact").css({
        "animation":"contactC 1s ease forwards",
        "-moz-animation":"contactC 1s ease forwards",
        "-webkit-animation":"contactC 1s ease forwards",
        "-o-animation":"contactC 1s ease forwards"});
    $("#about").css({
        "animation":"aboutB 1s ease forwards",
        "-moz-animation":"aboutB 1s ease forwards",
        "-webkit-animation":"aboutB 1s ease forwards",
        "-o-animation":"aboutB 1s ease forwards"});
}