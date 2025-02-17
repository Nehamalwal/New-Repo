gsap.to(" #page1 .box",{
     
      x:600,
      duration:2,
      delay:1,
      rotation:360,
      
      
})
gsap.to(" #page2 .box",{
     
    x:600,
    duration:2,
    delay:1,
    scrollTrigger:'#page2 .box'
})
gsap.to(" #page3 .box",{
     
    x:600,
    duration:2,
    delay:1,
    scrollTrigger:'#page3 .box'
})