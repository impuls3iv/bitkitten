$(function(){

  $('.summon-cats').on('click', function(){
    console.log('button clicked')
    $('.cat-box').html(" ");
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      data: { },
      dataType: 'json'
    }).done(function(returnData) {
      $('<img>').attr('src', returnData.cats[0].photo).attr('alt', "Photo of " + returnData.cats[0].name)
                .appendTo('.cat-box');
    }).fail(function(){
      console.log("failed... Here is the returnData " + returnData)

    });//end of ajax
  });//end of click


});
