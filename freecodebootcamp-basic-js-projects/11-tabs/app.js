const about = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", e => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class
    tabBtns.forEach(tabBtn => {
      tabBtn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide articles
    articles.forEach(article => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add('active')
  }
});
