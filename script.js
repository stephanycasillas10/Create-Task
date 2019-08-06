
function result(answer, description, image){
    $("#answer").text(answer);
    $("#description").text(description);
    $("#imganswer").attr("src", image);  
}

$("button").click(function() {
    var zodiac=$("#zodiac").val();

    if (zodiac==="Aquarius"||zodiac==="aquarius"){
        result("Otter", "You are Independent,lovable and Intelligent","https://media.gettyimages.com/vectors/sea-otter-vector-id165928772?s=612x612");
        
} else if (zodiac==="Pisces"||zodiac==="pisces" ){
    result("Wolf", "You are passionate and emotional","http://how2drawanimals.com/images/WolfToon/draw-cute-little-cartoon-wolf-pup-howling-thumb.jpg");
} else if (zodiac==="Aries"||zodiac==="aries"){
    result("Hawk", "You are a leader and takes opportunities", "https://cdn1.vectorstock.com/i/thumb-large/97/55/cute-eagle-cartoon-vector-16309755.jpg");

} else if (zodiac==="Taurus"|| zodiac==="taurus" ){
    result("Beaver", "You love to rule and can adapt to situations", "https://image.shutterstock.com/image-vector/beaver-cute-wildlife-icon-vector-260nw-462536317.jpg");
   
} else if (zodiac==="Gemini"||zodiac==="gemini" ){
    result("Deer", "You are creative,inspirational and full of joy","http://how2drawanimals.com/images/DeerToon/how-to-draw-cute-cartoon-deer-antlers-thumb.jpg");
    
} else if (zodiac==="Cancer"||zodiac==="cancer" ){
    result("Woodpecker", "You are a good friend and partner", "https://rlv.zcache.ca/cute_cartoon_woodpecker_classic_round_sticker-r4566b56a75ab468eb1063ab7b7a36939_v9waf_8byvr_307.jpg?rvtype=content");
    
} else if (zodiac==="Leo"||zodiac==="leo"){
    result("Salmon", "You are creative,enthusiastic, intelligent, and generous","http://thumb1.shutterstock.com/display_pic_with_logo/946633/150211358/stock-vector-cute-cartoon-fish-vector-150211358.jpg"); 
    
} else if (zodiac==="Virgo"||zodiac==="virgo" ){
    result("Bear", "You are caring and generous","https://image.shutterstock.com/image-vector/cute-cartoon-teddy-bear-vector-260nw-599424641.jpg"); 
    
} else if (zodiac==="Libra"|| zodiac==="libra" ){
    result("Crow","You are charismatic and have a positive energy", "https://us.123rf.com/450wm/nyamol/nyamol1607/nyamol160700053/60376069-stock-vector-cartoon-crow-sitting-on-tree-branch.jpg?ver=6" );
    
} else if (zodiac==="Scorpio"|| zodiac==="scorpio" ){
    result("Snake","You are mysterious, affectionate, and sensitive","https://png.pngtree.com/element_origin_min_pic/16/06/13/20575ea14b110a5.jpg" );
    
} else if (zodiac==="Sagittarius"||zodiac==="sagittarius" ){
    result("Owl","You are friendly and adventurous","https://png.pngtree.com/element_origin_min_pic/17/01/05/e873757d576e1da80a2583878f370bac.jpg"  );
    
} else if (zodiac==="Capricorn"||zodiac==="capricorn" ){
    result("Goose","You are persistent and ambitious ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUX3xI5Pl10ypjjPJiVH4tH_poS3q3WZHknPZH8cxi5uw1k1s" );
}else{
    $("#answer").text("type something");
    
}
});