function themeHandler(sel){

    if($(sel).hasClass("day")){ //현재 주간모드 > 야간모드로 변경
        $("body").css("color", "#cccccc");
        $("body").css("background-color", "#1f1f1f");
        $("a").css("color", "#8ec18b");

        //day 클래스 > night 클래스로 변경
        $(sel).removeClass("day");
        $(sel).addClass("night");

    }else { // 현재 야간모드 > 주간모드로 변경
        $("body").css("color", "black");
        $("body").css("background-color", "white");
        $("a").css("color", "darkgreen");

        //night 클래스 > day 클래스로 변경
        $(sel).removeClass("night");
        $(sel).addClass("day");
  
    }
    
}