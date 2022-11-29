function GetUserInfo() {
    var character_body = Math.floor(Math.random() * 1);
    var character_body_color = "#ffffff";
    var character_hair = Math.floor(Math.random() * 2);
    var character_hair_color = "#ffffff";
    var character_top = Math.floor(Math.random() * 4);
    var character_top_color = "#ffffff";
    var character_bottom = Math.floor(Math.random() * 4);
    var character_bottom_color = "#ffffff";
    var character_shoes = Math.floor(Math.random() * 4);
    var character_shoes_color = "#ffffff";
    var character_accesoory = Math.floor(Math.random() * 8);
    var character_accesoory_color = "#ffffff";
    var usernickname = "홍길동" + Math.floor(Math.random() * 10000);

    var retvalue = usernickname + "/" + character_body + "/" + character_body_color + "/" + character_hair + "/" + character_hair_color + "/" + character_top + "/" + character_top_color + "/" + character_bottom + "/" + character_bottom_color + "/" + character_shoes + "/" + character_shoes_color + "/" + character_accesoory + "/" + character_accesoory_color;
    return retvalue;
}

function GetRoomNameInfo() {
    var roomName = "user@strapi.io_2";
    return roomName;
}

function LeaveRoom() {
    // 메타버스 안에서 나가기 버튼 누름.
    // 페이지 이동 필요
}