"use strict";

/* ===== Helper Function ===== */
const elementToggleFunc = (elem) => elem.classList.toggle("active");

/* ===== Sidebar Toggle ===== */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn)
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

/* ===== Portfolio Filter ===== */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function normalize(str) {
  return (str || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "");
}

function filterProjects(selectedValue) {
  const selected = normalize(selectedValue);

  filterItems.forEach((item) => {
    const category = normalize(item.dataset.category);

    const shouldShow = selected === "all" || selected === category;

    item.classList.toggle("active", shouldShow);
  });
}

// Desktop Filter Buttons
let lastActiveBtn = filterButtons[0];
filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText;
    filterProjects(selectedValue);

    lastActiveBtn.classList.remove("active");
    this.classList.add("active");
    lastActiveBtn = this;
  });
});

// Mobile Dropdown Filter
if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText;
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterProjects(selectedValue);
    });
  });
}

/* ===== Page Navigation ===== */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const pageName = this.innerText.toLowerCase();
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === pageName);
    });
    navigationLinks.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    window.scrollTo(0, 0);
  });
});

console.log("✅ Filter script loaded successfully");

/* ==========================
   SKILLS TAB SWITCHING LOGIC
========================== */

const skillTabs = document.querySelectorAll(".skills-tab");
const skillPanels = document.querySelectorAll(".skill-panel");

skillTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    skillTabs.forEach((t) => t.classList.remove("active"));

    // Add active to clicked tab
    tab.classList.add("active");

    // Hide all skill panels
    skillPanels.forEach((panel) => panel.classList.remove("active"));

    // Show the selected panel
    skillPanels[index].classList.add("active");
  });
});
