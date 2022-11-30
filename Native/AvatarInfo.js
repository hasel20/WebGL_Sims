function SendAvatarInfo(Body, BodyColorR, BodyColorG, BodyColorB, Hair, HairColorR, HairColorG, HairColorB, Top, TopColorR, TopColorG, TopColorB, Bottom, BottomColorR, BottomColorG, BottomColorB, Shoes, ShoesColorR, ShoesColorG, ShoesColorB, Accessory, AccessoryColorR, AccessoryColorG, AccessoryColorB) {
    var BodyColor = "rgb(" + BodyColorR + ", " + BodyColorG + ", " + BodyColorB + ")";
    var Bodyres = rgbToHex(BodyColor);

    var HairColor = "rgb(" + HairColorR + ", " + HairColorG + ", " + HairColorB + ")";
    var Hairres = rgbToHex(HairColor);

    var TopColor = "rgb(" + TopColorR + ", " + TopColorG + ", " + TopColorB + ")";
    var Topres = rgbToHex(TopColor);

    var BottomColor = "rgb(" + BottomColorR + ", " + BottomColorG + ", " + BottomColorB + ")";
    var Bottomres = rgbToHex(BottomColor);

    var ShoesColor = "rgb(" + ShoesColorR + ", " + ShoesColorG + ", " + ShoesColorB + ")";
    var Shoesres = rgbToHex(ShoesColor);

    var AccessoryColor = "rgb(" + AccessoryColorR + ", " + AccessoryColorG + ", " + AccessoryColorB + ")";
    var Accessoryres = rgbToHex(AccessoryColor);
    //console.log(Bodyres);

    console.log("아바타 정보 : " + Body + ", " + Bodyres + ", " + Hair + ", " + Hairres + ", " + Top + ", " + Topres + ", " + Bottom + ", " + Bottomres + ", " + Shoes + ", " + Shoesres + ", " + Accessory + ", " + Accessoryres);
}

function GetAvatarInfo() {
    var character_body = 1;
    var character_body_color = "#ffffff";
    var character_hair = 1;
    var character_hair_color = "#ffffff";
    var character_top = 1;
    var character_top_color = "#ffffff";
    var character_bottom = 1;
    var character_bottom_color = "#ffffff";
    var character_shoes = 1;
    var character_shoes_color = "#ffffff";
    var character_accesoory = 1;
    var character_accesoory_color = "#ffffff";

    var retvalue = character_body + "/" + character_body_color + "/" + character_hair + "/" + character_hair_color + "/" + character_top + "/" + character_top_color + "/" + character_bottom + "/" + character_bottom_color + "/" + character_shoes + "/" + character_shoes_color + "/" + character_accesoory + "/" + character_accesoory_color;
    return retvalue;
}

function rgbToHex(rgbType) {
    /* 
    ** 컬러값과 쉼표만 남기고 삭제하기. 
    ** 쉼표(,)를 기준으로 분리해서, 배열에 담기. 
    */ 
    var rgb = rgbType.replace( /[^%,.\d]/g, "" ).split( "," ); 
    
    rgb.forEach(function (str, x, arr){ 
    
        /* 컬러값이 "%"일 경우, 변환하기. */ 
        if ( str.indexOf( "%" ) > -1 ) str = Math.round( parseFloat(str) * 2.55 ); 
        
        /* 16진수 문자로 변환하기. */ 
        str = parseInt( str, 10 ).toString( 16 ); 
        if ( str.length === 1 ) str = "0" + str; 
        
        arr[ x ] = str; 
    }); 
    
    return "#" + rgb.join( "" ); 
}