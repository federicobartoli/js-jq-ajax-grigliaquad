$(document).ready(function () {


     var numeroUtente = parseInt(prompt('Inserisci un numero da 0 a 9'));

$.ajax({
     url: 'https://flynn.boolean.careers/exercises/api/random/int',
     method: 'GET',
     success: function(data) {
          var numeroPC = data.response;
          console.log(numeroPC);
          vincitore(numeroUtente, numeroPC);
     },
     error: function(){
          alert('ERRORE')
     }
});



});

function vincitore(numUtente , numPC) {

     if(numUtente > numPC) {
          console.log('hai vinto');
     } else {
          console.log('hai perso!');
     }
}
