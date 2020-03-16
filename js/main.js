$(document).ready(function () {
//SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.




$('.square').click(function(){
     var these = $(this);
     console.log(these); //DEBUG
     $(these).removeClass('yellow green');
     $.ajax({
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function(data) {
               var numeroPC = data.response;
               console.log(numeroPC); //DEBUG
               if(numeroPC <= 5) {
                    $(these).addClass('yellow');
                    $(these).children('p').text(numeroPC);
               } else if(numeroPC > 5) {
                    $(these).addClass('green');
                    $(these).children('p').text(numeroPC);
               }
          },
          error: function(){
               alert('ERRORE')
          }
     });




});








});
