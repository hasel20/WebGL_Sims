function SendAvatarInfo(Body, BodyColorR, BodyColorG, BodyColorB, Hair, HairColorR, HairColorG, HairColorB, Top, TopColorR, TopColorG, TopColorB, Bottom, BottomColorR, BottomColorG, BottomColorB, Shoes, ShoesColorR, ShoesColorG, ShoesColorB, AccessoryBack, AccessoryBackColorR, AccessoryBackColorG, AccessoryBackColorB, AccessoryMask, AccessoryMaskColorR, AccessoryMaskColorG, AccessoryMaskColorB, AccessoryGlasses, AccessoryGlassesColorR, AccessoryGlassesColorG, AccessoryGlassesColorB) {
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

    var AccessoryBackColor = "rgb(" + AccessoryBackColorR + ", " + AccessoryBackColorG + ", " + AccessoryBackColorB + ")";
    var AccessoryBackres = rgbToHex(AccessoryBackColor);

    var AccessoryMaskColor = "rgb(" + AccessoryMaskColorR + ", " + AccessoryMaskColorG + ", " + AccessoryMaskColorB + ")";
    var AccessoryMaskres = rgbToHex(AccessoryMaskColor);

    var AccessoryGlassesColor = "rgb(" + AccessoryGlassesColorR + ", " + AccessoryGlassesColorG + ", " + AccessoryGlassesColorB + ")";
    var AccessoryGlassesres = rgbToHex(AccessoryGlassesColor);
    //console.log(Bodyres);

    console.log("아바타 정보 : " + Body + ", " + Bodyres + ", " + Hair + ", " + Hairres + ", " + Top + ", " + Topres + ", " + Bottom + ", " + Bottomres + ", " + Shoes + ", " + Shoesres + ", " + AccessoryBack + ", " + AccessoryBackres + ", " + AccessoryMask + ", " + AccessoryMaskres + ", " + AccessoryGlasses + ", " + AccessoryGlassesres);
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
    var character_accessory_back = 1;
    var character_accessory_back_color = "#ffffff";
    var character_accessory_mask = 1;
    var character_accessory_mask_color = "#ffffff";
    var character_accessory_glasses = 1;
    var character_accessory_glasses_color = "#ffffff";

    var retvalue = character_body + "/" + character_body_color + "/" + character_hair + "/" + character_hair_color + "/" + character_top + "/" + character_top_color + "/" + character_bottom + "/" + character_bottom_color + "/" + character_shoes + "/" + character_shoes_color + "/" + character_accessory_back + "/" + character_accessory_back_color + "/" + character_accessory_mask + "/" + character_accessory_mask_color + "/" + character_accessory_glasses + "/" + character_accessory_glasses_color;
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