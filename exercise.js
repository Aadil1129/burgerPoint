

var totalPrice=50;

function addIngredient(item){
    var num = parseFloat($("."+item+"Counter").text());
    if(num>=4) return;
    $("."+item+"Counter").text(num+1);
	$("."+item).first().after(`<div class="${item}"></div>`);
	var rupees=parseFloat($("."+item+"Price").text());
    $(".totalPrice").text(rupees+totalPrice);    
    totalPrice += rupees;     
};

function removeIngredient(item){
    var num = parseFloat($("."+item+"Counter").text());
    if(num<=1) return;
    $("."+item+"Counter").text(num-1);
    $("."+item).first().remove();
	var rupees=$("."+item+"Price").text();
    $(".totalPrice").text(totalPrice-rupees);    
    totalPrice -= rupees;     
};

