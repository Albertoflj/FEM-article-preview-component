var share = document.getElementById('sButton');
var w = window.innerWidth;
var profile = document.getElementById('profile');
var sMenu = document.getElementById('smenu');

window.addEventListener('resize', function(event){
     w = window.innerWidth;

});
share.addEventListener('click',function(){
    if(share.classList.contains('open')){
        share.classList.remove('open');
        sMenu.classList.add('hide');
          
    }
    else{
        share.classList.add('open');
        sMenu.classList.remove('hide');
      
    }

})

