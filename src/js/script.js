/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  headerScroll();
  loadShowPage();
  form();
  videoPlay();
};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

const form = () => {
  const footerForm = qs("#footerForm");
  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

const headerScroll = () => {
  window.addEventListener("scroll", () => {
    const header = qs(".header");
    const backToTopLink = qs(".back-to-top-link");
    const windowScrollY = window.scrollY;
    const SCROLL_HEIGHT = 500;
    if (windowScrollY < SCROLL_HEIGHT) {
      header.classList.remove("scrollEffect");
      backToTopLink.style.display = "none";
    } else {
      header.classList.add("scrollEffect");
      backToTopLink.style.display = "block";
    }
  });
};

const showPage = (page) => {
  qsAll("h2.slider__header").forEach((sliderHeader) => {
    sliderHeader.style.display = "none";
  });

  qs(`#${page}`).style.display = "block";
};

const loadShowPage = () => {
  qsAll(".slider__item").forEach((sliderItem) => {
    sliderItem.onclick = function () {
      showPage(this.dataset.page);
    };
  });
};

$(".owl-carousel").owlCarousel({
  loop: false,
  items: 6,
  dots: false,
  margin: 10,
  nav: true,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 6,
      nav: true,
    },
  },
});

const videoPlay = () => {
  const videoPlayBtn = qs(".video-play");
  const video = qs(".use__video");

  videoPlayBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoPlayBtn.classList.remove("bi-play-circle-fill");
      videoPlayBtn.classList.add("bi-pause-circle-fill");

      setTimeout(() => {
        videoPlayBtn.style.opacity = "0";
      }, 2000);
    } else {
      video.pause();
      videoPlayBtn.classList.remove("bi-pause-circle-fill");
      videoPlayBtn.classList.add("bi-play-circle-fill");

      setTimeout(() => {
        videoPlayBtn.style.opacity = "0";
      }, 2000);
    }
  });

  video.addEventListener("mouseenter", () => {
    videoPlayBtn.style.opacity = "1";
    setTimeout(() => {
      videoPlayBtn.style.opacity = "0";
    }, 2000);
  });
};
