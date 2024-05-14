$(document).ready(function (){
    $('#slider').owlCarousel({
        loop: true,
        margin: 0,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            }
        }
    })
});
// const counterElement = document.getElementById('counter');
// const counterElement2 = document.getElementById('counter2');
// const counterElement3 = document.getElementById('counter3');
// let count = 0;
// let maxcount=counterElement;

// function updateCounter() {
//     counterElement.textContent = count;
//     counterElement2.textContent = count;
//     counterElement3.textContent = count;
// }

// function startAutoCounter() {
//     console.log(maxcount);
//     const intervalId = setInterval(() => {
//         count++;
//         updateCounter();
//         if (count >= 100) {
//             clearInterval(intervalId);
//         }
//     }, 10); // Change the interval (in milliseconds) here
// }

// // Start the auto counter when the page loads
// startAutoCounter();

$(".number").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: $(this).data("esing"),
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });