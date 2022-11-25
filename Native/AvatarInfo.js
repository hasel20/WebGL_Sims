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