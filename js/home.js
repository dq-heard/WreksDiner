// Get the container element & create an array of section names
const navContainer = document.getElementById("nav-container");
const sectionTitles = ["Home", "About", "Menu", "Reviews", "FAQs", "Contact"];

// Loop over sections array & create a nav-link for each one
sectionTitles.forEach(section => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="nav-link" href="#${section.toLowerCase()}">${section}</a>`
  navContainer.appendChild(li);
});

// Get all nav-links & set "Home" as default active link
const links = document.getElementsByClassName("nav-link");
const active = document.getElementsByClassName("active");
links[0].className += " active";

// Loop through the links and add active class on click
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {
    e.preventDefault();  
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";

    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  });
}

//Get sections & match current one with active nav-links
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= (window.innerHeight)/3) {
      current = section.getAttribute("id");
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].getAttribute("href").substring(1) === current) {
      links[i].classList.add("active");
    }
  }
});

// Setup back-to-top link
const topLink = document.querySelector(".top-link");

window.onscroll = () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 565) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
}

// Active link reset for clicked top-link
topLink.addEventListener("click", function() {
  active[0].className = active[0].className.replace(" active", "");
  links[0].className += " active";
});

// Create an array of menu items
const menu = [
  {
    id: 1,
    title: "Bossman Slamcakes",
    category: "breakfast",
    price: 4.99,
    img: "./media/item-1.jpeg",
    desc: `eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat`,
  },
  {
    id: 2,
    title: "Hartbreaker",
    category: "lunch",
    price: 13.99,
    img: "./media/item-2.jpeg",
    desc: `tempus imperdiet nulla malesuada pellentesque elit eget gravida cum`,
  },
  {
    id: 3,
    title: "Berry Stratusfied",
    category: "shakes",
    price: 6.99,
    img: "./media/item-3.jpg",
    desc: `mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl`,
  },
  {
    id: 4,
    title: "Toast to Coast",
    category: "breakfast",
    price: 7.99,
    img: "./media/item-4.jpeg",
    desc: `viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas`,
  },
  {
    id: 5,
    title: "Eggsecution",
    category: "lunch",
    price: 11.99,
    img: "./media/item-5.jpeg",
    desc: `morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas`,
  },
  {
    id: 6,
    title: "Sensual Chocolate",
    category: "shakes",
    price: 8.99,
    img: "./media/item-6.jpeg",
    desc: `in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed`,
  },
  {
    id: 7,
    title: "Last Sunrise",
    category: "breakfast",
    price: 5.99,
    img: "./media/item-7.jpeg",
    desc: `aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque`,
  },
  {
    id: 8,
    title: "American Dream",
    category: "lunch",
    price: 12.99,
    img: "./media/item-8.jpeg",
    desc: `cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus`,
  },
  {
    id: 9,
    title: "Showstopper",
    category: "shakes",
    price: 9.99,
    img: "./media/item-9.jpeg",
    desc: `ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam`,
  },
  {
    id: 10,
    title: "Brutus Beefsteak",
    category: "dinner",
    price: 20.99,
    img: "./media/item-10.jpeg",
    desc: `vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar`,
  },
  {
    id: 11,
    title: "Milan Miracle",
    category: "dinner",
    price: 16.99,
    img: "./media/item-11.jpg",
    desc: `sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui`,
  },
  {
    id: 12,
    title: "Chicken Crossface",
    category: "dinner",
    price: 15.99,
    img: "./media/item-12.jpg",
    desc: `quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed`,
  },
];
 
// Get parent elements for this section
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
 
// Display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
 
// Create entries for each menu item
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

// Create categories and filter buttons based on food type
function displayMenuButtons(menuFiltered, currentCategory) {
  const categories = menu.reduce (
    function (values, item) {
      if (!values.includes(item.category) && item.category !== currentCategory) {
        values.push(item.category);
      }
      return values;
    },
    menuFiltered ? ["all"] : []
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
        displayMenuButtons(false);
      } else {
        displayMenuItems(menuCategory);
        // update the filter buttons
        displayMenuButtons(true, category);
      }
    });
  });  
}

// Create an array for reviews
const reviews = [
  {
    id: 1,
    img:
      "./media/person-1.jpg",
    text:
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Culpa, ullam tenetur? Non modi quos cum, possimus neque fuga, 
      voluptate voluptas facere soluta molestiae, nihil itaque dolores. 
      Perspiciatis blanditiis vel ullam similique.`,
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
       Et pharetra eligendi ipsam eum exercitationem ultricies.`,
    stars:`<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-regular fa-star"></i>`,
    name: "Bill Anderson",
  },
];

// Select items within the reviews
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const stars = document.getElementById("stars");

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  info.textContent = item.text;
  author.textContent = item.name;
  stars.innerHTML = item.stars;
});

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  info.textContent = item.text;
  author.textContent = item.name;
  stars.innerHTML = item.stars;
}

// Carousel effect
setInterval(e => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}, 5000);

// Create an array for questions & get parent container
const questions = ["Do You Accept All Major Credit Cards?",
"Do You Support Local Farmers?","Do You Use Organic Ingredients?",
"Do You Have Other Locations?"];

const faqContainer = document.getElementById("faq-container");

// Display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayQuestions(questions);
  toggleAnswers();
});
 
// Create FAQ entries on the page
function displayQuestions(questions){
  questions.forEach(question => {
    const questionTitle = document.createElement("li");
    questionTitle.innerHTML = `<div class="box question">
                                <div class="question-title">

                                  <h3>${question}</h3>
                                  <button type="button" class="question-btn">

                                    <span class="plus-icon">
                                      <i class="far fa-plus-square"></i>
                                    </span>

                                    <span class="minus-icon">
                                      <i class="far fa-minus-square"></i>
                                    </span>

                                  </button>
                                </div>

                                <div class="question-text">
                                  <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                  dolore illo dolores quia nemo doloribus quaerat, magni numquam
                                  repellat reprehenderit.
                                  </p>
                                </div>
                              </div>`
    faqContainer.appendChild(questionTitle);
  });
};

// Create toggle to show and hide the answers
function toggleAnswers() {
  const buttons = document.querySelectorAll(".question-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.parentNode.nextElementSibling;
      answer.classList.toggle("show-text");
      button.classList.toggle("show-text");
    });
  });
};