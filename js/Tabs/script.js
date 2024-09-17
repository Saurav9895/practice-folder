const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");

const tab1Content = document.getElementById("tab1Content");
const tab2Content = document.getElementById("tab2Content");
const tab3Content = document.getElementById("tab3Content");

function hideAllTabs() {
  tab1Content.classList.remove("visible");
  tab2Content.classList.remove("visible");
  tab3Content.classList.remove("visible");
}

function tab1El() {
  hideAllTabs();
  tab1Content.classList.add("visible");
  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
}

function tab2El() {
  hideAllTabs();
  tab2Content.classList.add("visible");
  tab1.classList.remove("active");
  tab3.classList.remove("active");
  tab2.classList.add("active");
}

function tab3El() {
  hideAllTabs();
  tab3Content.classList.add("visible");
  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab3.classList.add("active");
}

tab1.addEventListener("click", tab1El);
tab2.addEventListener("click", tab2El);
tab3.addEventListener("click", tab3El);
