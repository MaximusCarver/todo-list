itemList = $("ul");
ulDivList = $("ul div");
input1 = $("input");
item1Delete = $(".delete");
myBtn = $(".fa-trash")
myTextSpan = $(".text")
myPlus = $(".plusSign")
myInputDiv = $(".inputTodo")

input1.on("keypress", function(e){
  if(e.which == 13){
    itemList.append("<div><li><span class=\"iconSpan\"><i class=\"fa fa-trash\"></span></i><span class=\"text\">" + input1.val() + "</span></li></div>")
    $(this).val("")
  }
})

$("ul").on("click", ".text", function(){
  $(this).toggleClass("checked")
});

 $("ul").on("click", ".iconSpan", function(e){
  $(this).parent().parent().fadeOut(500, function(){
      $(this).remove()
  })
  e.stopPropagation()
})

myPlus.on("click", function(){
  myInputDiv.slideToggle()
})
