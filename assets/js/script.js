
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const sectionText = document.querySelector(".section-text");
  const tabList = document.querySelector(".tab-list");

  const content = {
    Why: {
      text: "Trees are essential to life on Earth. They provide clean air, regulate climate, support wildlife and also reduce soil erosion. Preserving them is vital for a sustainable future.",
      listItems: [
        "Prevent Soil Erosion",
        "Ensuring Biodiversity",
        "May Cause Harm to Nature in Future",
        "Improving Air Quality",
      ],
    },
    How: {
      text: "Preserving trees involves methods like reforestation, sustainable forest management, protection from deforestatio, Agroforestry, etc. Even the initiatives from government are necessary like introducing Forest Protection Laws",
      listItems: [
        "Tree Planting Initiatives",
        "Proper Forest Protection Laws",
        "Supporting Sustainable Forestry",
        "Promoting Agroforestry",
      ],
    },
    Impact: {
      text: "Preserving trees has an effect on stabilizing the climate, regulating the water cycle, protecting ecosystems. It also plays a important role in lowering harful gases in nature and balancing natural harmony.",
      listItems: [
        "Stabilizing the Climate",
        "Improving Soil Health",
        "Reducing Carbon Emission",
        "Regulating the Water Cycle",
      ],
    },
  };

  function updateContent(tabName) {
    sectionText.textContent = content[tabName].text;
    tabList.innerHTML = "";
    content[tabName].listItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("tab-item");
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("item-icon");
      const icon = document.createElement("ion-icon");
      icon.setAttribute("name", "checkmark-circle");
      iconDiv.appendChild(icon);
      const textP = document.createElement("p");
      textP.classList.add("tab-text");
      textP.textContent = item;
      listItem.appendChild(iconDiv);
      listItem.appendChild(textP);
      tabList.appendChild(listItem);
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      const tabName = btn.textContent.trim();
      updateContent(tabName);
    });
  });

  updateContent("Why");
});

function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

function setupModal(modalId, btnId, closeClass) {
  const modal = document.getElementById(modalId);
  const btn = document.getElementById(btnId);
  const span = document.getElementsByClassName(closeClass)[0];

  btn.onclick = function () {
    modal.style.display = "block";
    disableScroll();
  };

  span.onclick = function () {
    modal.style.display = "none";

    enableScroll();
  }; 

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      enableScroll();
    }
  });
}

setupModal("myModal", "myBtn", "close");
setupModal("myModalPlantation", "myBtnPlantation", "close-plantation");
setupModal("myModalTreeFree", "myBtnTreeFree", "close-treeFree");
setupModal("myModalEducate", "myBtnEducate", "close-educate");
setupModal("myModalEvent1", "myBtnEvent1", "close-event1");
setupModal("myModalEvent2", "myBtnEvent2", "close-event2");
setupModal("myModalEvent3", "myBtnEvent3", "close-event3");
setupModal("myModalEvent4", "myBtnEvent4", "close-event4");
