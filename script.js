let toggler = document.querySelector('#toggler');
toggler.onclick = () => {
    if(toggler.classList.contains('fa-sun')){
        toggler.classList.replace('fa-sun','fa-moon');
        document.body.classList.add('active');
    }else{
        toggler.classList.replace('fa-moon','fa-sun');
        document.body.classList.remove('active');
    }
}

document.querySelectorAll('.small-img-1').forEach(image =>{
 image.addEventListener('click', () =>{
   var src = image.getAttribute('src');
   document.querySelector('.big-image-1').src = src;
 });
});

document.querySelectorAll('.small-img-2').forEach(image =>{
    image.addEventListener('click', () =>{
      var src = image.getAttribute('src');
      document.querySelector('.big-image-2').src = src;
    });
   });

   document.querySelectorAll('.small-img-3').forEach(image =>{
    image.addEventListener('click', () =>{
      var src = image.getAttribute('src');
      document.querySelector('.big-image-3').src = src;
    });
   });   

   document.querySelectorAll('.small-img-4').forEach(image =>{
    image.addEventListener('click', () =>{
      var src = image.getAttribute('src');
      document.querySelector('.big-image-4').src = src;
    });
   });  

