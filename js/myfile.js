let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset) {

        $("#btnUp").fadeIn(500);
        $("#navbar").css("backgroundColor", "rgba(0,0,0,0.5)");

    }
    else {

        $("#btnUp").fadeOut(500);
        $("#navbar").css("backgroundColor", " transparent")
    }

})

$("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: '0' }, 1000);
})



$("a").click(function () {
    let Href = $(this).attr("href");
    let sectionOffset = $(Href).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);
})

let colorItem = $(".color-item");

colorItem.eq(0).css("backgroundColor", "navy");
colorItem.eq(1).css("backgroundColor", "red");
colorItem.eq(2).css("backgroundColor", "yellow");
colorItem.eq(3).css("backgroundColor", "blue");
colorItem.eq(4).css("backgroundColor", "grey");

colorItem.click(function () {
    let color = $(this).css("backgroundColor");
    $("body").css("color", color);
})

$("#options img").click(function () {
    let imgSource = $(this).attr("src")
    $("header").css("backgroundImage", `url(${imgSource})`);
})

$("#options i").click(function () {

    let colorsBoxWidth = $(".colors-box").innerWidth();

    if ($("#options").css('left') == "0px") {

        $("#options").animate({ left: `-${colorsBoxWidth}` }, 1000);

    }
    else {
        $("#options").animate({ left: `0px` }, 1000);

    }
})

// $(document).ready(function () {
//     $("#loading").fadeOut(3000, function () {
//         $("body").css("overflow", "auto");
//     })
// })

window.onload = function () {
    $("#loading").fadeOut(3000, function () {
        $("body").css("overflow", "auto");
    })
}