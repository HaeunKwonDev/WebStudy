function themeHandler(sel){

    if($(sel).hasClass("day")){ //���� �ְ���� > �߰����� ����
        $("body").css("color", "#cccccc");
        $("body").css("background-color", "#1f1f1f");
        $("a").css("color", "#8ec18b");

        //day Ŭ���� > night Ŭ������ ����
        $(sel).removeClass("day");
        $(sel).addClass("night");

    }else { // ���� �߰���� > �ְ����� ����
        $("body").css("color", "black");
        $("body").css("background-color", "white");
        $("a").css("color", "darkgreen");

        //night Ŭ���� > day Ŭ������ ����
        $(sel).removeClass("night");
        $(sel).addClass("day");
  
    }
    
}