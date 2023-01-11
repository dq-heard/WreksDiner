// setup back to top link
window.onscroll = () => {
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 320) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
}

const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 4.99,
    img: "./media/item-1.jpeg",
    desc: `eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./media/item-2.jpeg",
    desc: `tempus imperdiet nulla malesuada pellentesque elit eget gravida cum`,
  },
  {
    id: 3,
    title: "Berry Delicious",
    category: "shakes",
    price: 6.99,
    img: "./media/item-3.jpg",
    desc: `mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 7.99,
    img: "./media/item-4.jpeg",
    desc: `viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 11.99,
    img: "./media/item-5.jpeg",
    desc: `morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 8.99,
    img: "./media/item-6.jpeg",
    desc: `in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 5.99,
    img: "./media/item-7.jpeg",
    desc: `aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./media/item-8.jpeg",
    desc: `cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus`,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 9.99,
    img: "./media/item-9.jpeg",
    desc: `ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 20.99,
    img: "./media/item-10.jpeg",
    desc: `vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar`,
  },
  {
    id: 11,
    title: "Pasta Paradise",
    category: "dinner",
    price: 16.99,
    img: "./media/item-11.jpg",
    desc: `sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui`,
  },
  {
    id: 12,
    title: "Chicken Cuisine",
    category: "dinner",
    price: 15.99,
    img: "./media/item-12.jpg",
    desc: `quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed`,
  },
];
 
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
 
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
 
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<div class="box">
                <img src=${item.img} alt=${item.title}>
                <div class="item-info">
                    <div class="wrapper">
                      <h4>${item.title}</h4>
                      <h4 class="price">$${item.price}</h4>
                    </div>
                    <p>${item.desc}</p>
                </div>
              </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
 
function displayMenuButtons() {
  const categories = menu.reduce (
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
                ${category}
              </button>`;
    })
    .join("");
 
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
 
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// local reviews data
const reviews = [
  {
    id: 1,
    img:
      "./media/person-1.jpg",
    text:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 
       Sed vulputate mi sit amet mauris.`,
    stars:`<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-regular fa-star-half-stroke"></i>`,  
    name: "Susan Smith",
  },
  {
    id: 2,
    img:
      "./media/person-2.jpg",
    text:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Imperdiet nulla malesuada pellentesque elit eget gravida cum. 
       Nulla aliquet porttitor lacus luctus accumsan.`,
    stars:`<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>`,
    name: "Anna Johnson",
  },
  {
    id: 3,
    img:
    "./media/person-3.jpg",
    text:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ultricies lacus sed turpis tincidunt. 
       Tellus at urna condimentum mattis pellentesque id nibh tortor id.`,
    stars:`<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-regular fa-star-half-stroke"></i>`,
    name: "Peter Jones",
  },
  {
    id: 4,
    img:
    "./media/person-4.jpg",
    text:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Non enim praesent elementum facilisis leo vel fringilla. 
       Et pharetra pharetra massa massa ultricies.`,
    stars:`<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-regular fa-star"></i>`,
    name: "Bill Anderson",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const stars = document.getElementById("stars");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  info.textContent = item.text;
  author.textContent = item.name;
  stars.innerHTML = item.stars;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  info.textContent = item.text;
  author.textContent = item.name;
  stars.innerHTML = item.stars;
}

// carousel effect
setInterval(e => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}, 5000);

//using selectors inside the element
const questions = document.querySelectorAll(".question");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayQuestions(questions);
});
 
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
      question.classList.toggle("show-text");
    });
});