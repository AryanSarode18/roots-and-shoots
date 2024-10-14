'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});




/**
 * about us section code change
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sectionText = document.querySelector('.section-text');
  const tabList = document.querySelector('.tab-list');

  const content = {
    "Why": {
      text: "Trees are essential to life on Earth. They provide clean air, regulate climate, support wildlife and also reduce soil erosion. Preserving them is vital for a sustainable future.",
      listItems: [
        "Prevent Soil Erosion",
        "Ensuring Biodiversity",
        "May Cause Harm to Nature in Future",
        "Improving Air Quality"
      ]
    },
    "How": {
      text: "Preserving trees involves methods like reforestation, sustainable forest management, protection from deforestatio, Agroforestry, etc. Even the initiatives from government are necessary like introducing Forest Protection Laws",
      listItems: [
        "Tree Planting Initiatives",
        "Proper Forest Protection Laws",
        "Supporting Sustainable Forestry",
        "Promoting Agroforestry"
      ]
    },
    "Impact": {
      text: "Preserving trees has an effect on stabilizing the climate, regulating the water cycle, protecting ecosystems. It also plays a important role in lowering harful gases in nature and balancing natural harmony.",
      listItems: [
        "Stabilizing the Climate",
        "Improving Soil Health",
        "Reducing Carbon Emission",
        "Regulating the Water Cycle"
      ]
    }
  };

  function updateContent(tabName) {
    sectionText.textContent = content[tabName].text;
    tabList.innerHTML = '';
    content[tabName].listItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('tab-item');
      const iconDiv = document.createElement('div');
      iconDiv.classList.add('item-icon');
      const icon = document.createElement('ion-icon');
      icon.setAttribute('name', 'checkmark-circle');
      iconDiv.appendChild(icon);
      const textP = document.createElement('p');
      textP.classList.add('tab-text');
      textP.textContent = item;
      listItem.appendChild(iconDiv);
      listItem.appendChild(textP);
      tabList.appendChild(listItem);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.textContent.trim();
      updateContent(tabName);
    });
  });

  updateContent('Why');
});


function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  disableScroll();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  enableScroll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    enableScroll();
  }
}
// Get the modal for plantation
var modalPlantation = document.getElementById("myModalPlantation");

// Get the new button that opens the plantation modal
var btnPlantation = document.getElementById("myBtnPlantation");

// Get the <span> element that closes the plantation modal
var spanPlantation = document.getElementsByClassName("close-plantation")[0];

// When the user clicks on the plantation button, open the modal
btnPlantation.onclick = function() {
  modalPlantation.style.display = "block";
  disableScroll();
}

// When the user clicks on <span> (x), close the plantation modal
spanPlantation.onclick = function() {
  modalPlantation.style.display = "none";
  enableScroll();
}

// When the user clicks anywhere outside of the plantation modal, close it
window.onclick = function(event) {
  if (event.target == modalPlantation) {
    modalPlantation.style.display = "none";
    enableScroll();
  }
}

const openBtnProducts = document.getElementById("myBtnProducts");
const modalProducts = document.getElementById("myModalProducts");
const closeBtnProducts = document.querySelector(".close-modal-btn");

// Function to open the modal
function openModal() {
    modalProducts.classList.remove("hide");
}

// Function to close the modal
function closeModal() {
    modalProducts.classList.add("hide");
}

// Event listener to open the modal
openBtnProducts.addEventListener("click", openModal);

// Event listener to close the modal when clicking the close button
closeBtnProducts.addEventListener("click", closeModal);

// Event listener to close the modal when clicking outside of the modal
modalProducts.addEventListener("click", function(e) {
    if (e.target === modalProducts) {
        closeModal();
    }
});

