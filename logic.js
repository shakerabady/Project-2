console.log("hi")
var count = 0;
var obj = { Book1: 40, Book2: 35, Book3: 15, Book4: 50, Book5: 35, Book6: 35, Book7: 15, Book8: 50, Book9: 40, Book10: 35, Book11: 5, Book12: 35, Book13: 40, Book14: 35, Book15: 10, Book16: 50 }
var arr = []
var result = 0;
$(document).ready(function () {
       $(".card").on("click", function () {

              arr.push(obj[$(this).siblings("h4").html()])


              count = count + 1
              $("#number").html(count)
              $("#number").addClass("badge  badge-pill badge-light ")





       })

})

$(document).ready(function () {
       $(".p-4 > img").on("mouseover", function () {

              if ($(this).parent().find("#info").length === 0) {
                     $(this).parent().append("<input type=button  id='info'  value='Quick view' class='btn btn-primary'  data-toggle='modal' data-target='#exampleModal'>")
              }


       })
})



$(document).ready(function () {
       $(".p-4").on("mouseleave", function () {

              $("#info").remove()
       })


})



$(document).ready(function () {

       $(document).on('click', '#info', function () {


              $(".modal-body").children("p").html($(this).siblings("div").children(".breif").html())



       })

})



$(document).ready(function () {

       $("#total").on("click", function () {
              if (result === 0) {
                     for (i = 0; i < arr.length; i++) { result = result + arr[i] }
              }

              var title = "Thank you for Shopping with us your card is  "
              $(".modal-body").children("p").html(title + result + "JD")

       })

})



$(document).ready(function () {

       $(".modal-footer > button").on('click', function () {


              arr = [];
              result = 0;
              x = 0;

              $("#number").html("")




       })

})