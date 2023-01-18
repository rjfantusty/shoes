
var tl=gsap.timeline();

gsap.set("#right",{
    backgroundColor:"rgb(221, 217, 217)"
})
gsap.set(".a",{
    opacity:0,
    y:10
})

tl.from("#left",{
    width:0,
    ease:Expo.easeInOut,
    duration:2

})

.from("#right",{
    
    width:0,
    ease:Expo.easeInOut,
    duration:2,
    delay:-1

})
.to(".a",{
    opacity:1,
    y:0,
    delay:-2,
    ease:Expo.easeInOut,
    duration:2,
    stagger:.2
})

