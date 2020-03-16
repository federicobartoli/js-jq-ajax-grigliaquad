$(document).ready(function () {

$('.square').click(function(){
     $.ajax({
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function(data) {
               var numeroPC = data.response;
               console.log(numeroPC);
          },
          error: function(){
               alert('ERRORE')
          }
     });
});








});
