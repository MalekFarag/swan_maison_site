console.log('Hello Elites.');


//    const  contactButs = document.querySelectorAll('.contactBut'),
//           menuBut     = document.querySelector('.menuBut'),
//           lightbox    = document.querySelector('.lightbox'),
//           contactDiv  = document.querySelector('.contactDiv'),
//           menuDiv     = document.querySelector('.menuDiv'),
//           xclose      = document.querySelector('.xclose');


//     function openLighbox(){
//         lightbox.classList.add('on');
//     }
//     function openConDiv(){
//         contactDiv.classList.add('on');
//     }
//     function openMenuDiv(){
//         menuDiv.classList.add('on');
//     }

//     function closeLighbox(){
//         lightbox.classList.remove('on');
//     }
//     function closeConDiv(){
//         contactDiv.classList.remove('on');
//     }
//     function closeMenuDiv(){
//         menuDiv.classList.remove('on');
//     }


//         contactButs.forEach(conBut => {
//             conBut.addEventListener('click', function(){
//                 closeMenuDiv();
//                 openLighbox();
//                 openConDiv();
//             });
//         });
//         menuBut.addEventListener('click', function(){
//             closeConDiv();
//             openLighbox();
//             openMenuDiv();
//         });

//         xclose.addEventListener('click', function(){
//             closeLighbox();
//             closeConDiv();
//             closeMenuDiv();
//         });


  //scroll
  function scroll(){
    let x = '#x' + this.id;
    let target = document.querySelector(x);
    
    target.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "center"})
    }
    
    document.querySelectorAll('.scroll').forEach(link => {
        link.addEventListener('click', scroll);
    });


// const dots = document.querySelectorAll('.dot');

// function backToSmall(){
//     console.log('fired')
//     dots.forEach(dot =>{
//         dot.classList.remove('expand');
//     })
// }

//     var waypoint = new Waypoint({
//         element: document.querySelector('.a1'),
//         handler: function(direction) {
//           backToSmall();
//           document.querySelector('.bar .d1').classList.add('expand');
//         }
//     })
//     var waypoint = new Waypoint({
//         element: document.querySelector('.a2'),
//         handler: function(direction) {
//           backToSmall();
//           document.querySelector('.bar .d2').classList.add('expand');
//         }
//     })
//     var waypoint = new Waypoint({
//         element: document.querySelector('.a3'),
//         handler: function(direction) {
//           backToSmall();
//           document.querySelector('.bar .d3').classList.add('expand');
//         }
//     })
//     var waypoint = new Waypoint({
//         element: document.querySelector('.a4'),
//         handler: function(direction) {
//           backToSmall();
//           document.querySelector('.bar .d4').classList.add('expand');
//         }
//     })
//     var waypoint = new Waypoint({
//         element: document.querySelector('.a5'),
//         handler: function(direction) {
//           backToSmall();
//           document.querySelector('.bar .d5').classList.add('expand');
//         }
//     })


 