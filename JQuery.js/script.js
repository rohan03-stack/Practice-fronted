// $(
//     function(){
//      let data = $('h1').text();
//      console.log(data);
//     $('h1').text("this is update")      
    
//     let dataclass = $('.para').text();
//     console.log(dataclass);
//     $('.para').html("my name is khan");


//     let dataclass1 = $('#link').text
//     ();
//     console.log(dataclass1);
   

     
//     }
// )


// let h1 = document.querySelector('#link').textContent;
// console.log(h1);

// let h1s = document.querySelectorAll('h1').textContent;
// console.log(h1s);


// $(
//     function(){
//         // $('h1').prepend("abccc   ")
//         // $('h1').append("    kjfherkjh   ")
//         // $('h1').after("hello world")
//         // $('h1').before("lets go")
//         // $('h1').empty();
//         // $('h1').remove();
//     }
// )



// .......................events .............................................


// $(document).ready(
//     function(){
        // $('button').click(
        //     function(){
        //         alert("button is clicked")
        //     }
        // )

        // $('button').dblclick(
        //     function(){
        //         alert("button is clicked")
        //     }
        // )

        // $('button').mouseenter(
        //     function(){
        //         alert("button is clicked")
        //     }
        // )

        // $('button').mouseleave(
        //     function(){
        //         alert("button is clicked")
        //     }
        // )

       
        

//         $('button').keyup(
//             function(){
//                 alert("button is clicked")
//             }
//         )

//         $('button').keydown(
//             function(){
//                 alert("button is clicked")
//             }
//         )
//     }
// )


// ...................                         addClass          ...........

// $(document).ready(
//    function(){
//     $('#add').click(
//         function(){
//             $('h2').addClass('headCSS')
//         }
//     )
//     $('#remove').click(
//         function(){
//             $('h2').removeClass('headCSS')
//         }
//     )
//     $('#toggle').click(
//         function(){
//             $('h2').toggleClass('headCSS')
//         }
//     )

//    }
// )

// ...  ......                       Dark mode...........................................


$(document).ready(
    function(){
        $('#dark').click(
            function(){
                $('body').addClass('.body')
            }
        )

        $('#white').click(
            function(){
                $('body').removeClass('.white')
            }
        )
        
        $('#dark').click(
            function(){
                $('body').toggleClass('body')
            }
        )


    }
)


// ...........................................effects........................................

// $(document).ready(
//     function(){
//         $('#display').click(
//             function(){
//                 $('h2').display("slow")
//             }
//         )

//         $('#hide').click(
//             function(){
//                 $('h2').hide(2000)
//             }
//         )
//         $('#show').click(
//             function(){
//                 $('h2').show(2000)
//             }
//         )
//         $('#toggle').click(
//             function(){
//                 $('h2').toggle(2000)
//             }
//         )
//     }
// )


// .....................................................fade...........................................


// $(document).ready(
//     function(){
//         $('#fadein').click(
//             function(){
//                 $('h2').fadeIn(2000)
//             }
//         )

//         $('#fadeout').click(
//             function(){
//                 $('h2').fadeOut(2000)
//             }
//         )
//         $('#fadetoggle').click(
//             function(){
//                 $('h2').fadeToggle(2000)
//             }
//         )
//         $('#fadeto').click(
//             function(){
//                 $('h2').fadeTo(2000, 0.2)
//             }
//         )
//     }
// )


// ......................................................slide.............................................

$(document).ready(
    function(){
        $('#slidedown').click(
            function(){
                $('p').slideDown(1000)
            }
        )

        $('#slideup').click(
            function(){
                $('p').slideUp(1000)
            }
        )
        $('#slidetoggle').click(
            function(){
                $('p').slideToggle(1000)
            }
        )
       
    }
)