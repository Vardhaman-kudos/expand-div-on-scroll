// Below JS will work when targetting for ONE Section
// document.addEventListener("DOMContentLoaded", function () {

//     gsap.registerPlugin(ScrollTrigger);

//     let tl1 = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".clip-animate-block",
//             start: "top center",
//             end: "bottom 10%",
//             scrub: true,
//             markers: false,
//         }
//     });

//     tl1.to(".clip-carousel", {
//         clipPath: "inset(0% round 0px)",
//         ease: "sine.out"
//     });
// });



// Below JS will work For Multiple section with ONE ID
gsap.registerPlugin(ScrollTrigger);

// Select all elements with the class 'clip-animate-block'
document.querySelectorAll(".clip-animate-block").forEach(block => {
    // Create a new timeline for each block
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom 10%",
            scrub: true,
            markers: false,
        }
    });

    // Find the .clip-carousel within the current block and animate it
    tl.to(block.querySelector(".clip-carousel"), {
        clipPath: "inset(0% round 0px)",
        ease: "sine.out"
    });
});


// Below JS will work basis on - When the section will be in view port then only expand JS should work

// const section = document.getElementById("clip-animation-block");

// window.addEventListener("scroll", function () {
//     const sectionRect = section.getBoundingClientRect();

//     const scrollTop = window.scrollY;
//     const sectionOffset = sectionRect.top + window.scrollY;
//     const sectionHeight = sectionRect.height;

//     if (scrollTop >= (sectionOffset - sectionHeight / 2) && scrollTop < (sectionOffset + sectionHeight / 2)) {

//         gsap.registerPlugin(ScrollTrigger);

//         let tl1 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".clip-animate-block",
//                 start: "top center",
//                 end: "bottom 10%",
//                 scrub: true,
//                 markers: false,
//             }
//         });


//         tl1.to(".clip-carousel", {
//             clipPath: "inset(0% round 0px)",
//             ease: "sine.out"
//         });

//     }
// });
