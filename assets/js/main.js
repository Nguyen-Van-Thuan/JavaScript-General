

//Part 1
function getRandomElement(list){
  return list[Math.floor((Math.random()*list.length))];
}
getRandomElement([3, 7, 9, 11]);

// Part 2
function getCountElement(lists, n){
  let visited = Array.from({length: n}, (_, i) => false);
         
    for (let i = 0; i < n; i++) {

        if (visited[i] == true)
            continue;  
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (list[i] == list[j]) {
                visited[j] = true;
                count++;
            }
        }
           document.write(list[i] + " :" + count + "<br/>");
    }
}
let lists = (["one", "two", "three", "one", "one", "three"]);
let n = list.length;
getCountElement(lists, n);

//Part 3
$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      center: true,
      nav:true,
      loop:true,
      responsive: {
        600: {
          items: 4
        }
      }
  });
});

async function()