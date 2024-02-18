//  =============== CUSTOM HEADER JS CODE START ===============
document.addEventListener("DOMContentLoaded", function () {
  let navBtn = this.querySelector(".nav-btn"),
    navCloseBtn = this.querySelector(".nav-close-btn"),
    toggleNav = (newState) => {
      let attr = "aria-expanded",
        state = navBtn.getAttribute(attr);

      navBtn.setAttribute(attr, newState);
    };
  menuTab = (e) => {
    let target = this.querySelector(".nav-btn[aria-expanded=true] ~ nav");

    if (target !== null) {
      let navLinks = target.querySelectorAll("a, button"),
        tries = 0,
        last = navLinks.length - 1;
      // try to find focus in open nav
      for (let l of navLinks) {
        if (this.activeElement !== l) ++tries;
      }
      // put focus on X (first link) if outside or tabbing from last link
      let onLast = this.activeElement === navLinks[last],
        onFirst = this.activeElement === navLinks[0],
        notShifting = !e.shiftKey,
        shifting = e.shiftKey;

      if (tries === navLinks.length || (onLast && notShifting)) {
        e.preventDefault();
        navLinks[0].focus();
        // go to last link if shift-tabbing from X
      } else if (onFirst && shifting) {
        e.preventDefault();
        navLinks[last].focus();
      }
    }
  };

  navBtn.addEventListener("click", () => {
    toggleNav(true);
  });
  navCloseBtn.addEventListener("click", () => {
    toggleNav(false);
  });
  this.addEventListener("keydown", (e) => {
    // Esc
    if (e.keyCode === 27) toggleNav(false);
    // Tab
    else if (e.keyCode === 9) menuTab(e);
  });
});


//  ============== CUSTOM HEADER JS CODE END =================

// // Toogle Theme Night & Dark Mood ====================
function toggleTheme() {
  if (localStorage.getItem("app-Theme") !== null) {
    if (localStorage.getItem("app-Theme") === "dark") {
      $("body").addClass("dark");
    }
    else {
      $("body").removeClass("dark");

    }
  }
  updateIcon();
}
toggleTheme();


$(".toggle-theme").on("click", function () {
  $("body").toggleClass("dark");
  if ($("body").hasClass("dark")) {
    localStorage.setItem("app-Theme", "dark");
  }
  else {
    localStorage.setItem("app-Theme", "light");
  }
  updateIcon();

});

function updateIcon() {
  if ($("body").hasClass("dark")) {
    $(".toggle-theme i").removeClass("fa-moon");
    $(".toggle-theme i").addClass("fa-sun");

  }
  else {
    $(".toggle-theme i").removeClass("fa-sun");
    $(".toggle-theme i").addClass("fa-moon");
  }


}

// About Me Tab Js Start =====================
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
    card.classList.add("is-active") :
    card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

//Home  CounterUp ========================
$('.statistic-counter').counterUp({
  delay: 30,
  time: 3000
});
//Resume CounterUp ========================
$('.counter').counterUp({
  delay: 30,
  time: 3000
});

// ============ Home Testimonial Js ==================
$(window).load(function () {
  $(".tm_circle").first().addClass("t_active");
  $("#testimonial_bg .tm_slide").first().addClass("t_active");
  $("#testimonial_image .client_img").first().addClass("t_active");
  $(".tm_quote").first().addClass("t_active");

  var animate = setInterval(function () {
    var $this = $(".tm_circle"),
      currentActiveBubble = $("#tm-nav-cirlces").find(".t_active"),
      position = $("#tm-nav-cirlces").children().index(currentActiveBubble),
      num = $(".tm_circle").length;

    if (position < num - 1) {
      $(".t_active").removeClass("t_active").next().addClass("t_active");
    } else {
      $(".tm_circle").removeClass("t_active").first().addClass("t_active");
      $("#testimonial_bg .tm_slide").removeClass("t_active").first().addClass("t_active");
      $("#testimonial_image .client_img").removeClass("t_active").first().addClass("t_active");
      $(".tm_quote").removeClass("t_active").first().addClass("t_active");
    }
    position++;
  }, 4500);

  $(".tm_circle").click(function () {
    clearInterval(animate);

    var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);

    $(".tm_circle").removeClass("t_active").eq(position).addClass("t_active");
    $("#testimonial_bg .tm_slide").removeClass("t_active").eq(position).addClass("t_active");
    $("#testimonial_image .client_img").removeClass("t_active").eq(position).addClass("t_active");
    $(".tm_quote").removeClass("t_active").eq(position).addClass("t_active");
  });

  $("#rightBtn , #leftBtn").click(function () {
    clearInterval(animate);

    var $this = $(this),
      currentActiveBubble = $("#tm-nav-cirlces").find(".t_active"),
      position = $("#tm-nav-cirlces").children().index(currentActiveBubble),
      num = $(".tm_circle").length;

    if ($this.hasClass("next")) {
      if (position < num - 1) {
        $(".t_active").removeClass("t_active").next().addClass("t_active");
      } else {
        $(".tm_circle").removeClass("t_active").first().addClass("t_active");
        $("#testimonial_bg .tm_slide").removeClass("t_active").first().addClass("t_active");
        $("#testimonial_image .client_img").removeClass("t_active").first().addClass("t_active");
        $(".tm_quote").removeClass("t_active").first().addClass("t_active");
      }
    } else {
      if (position === 0) {
        $(".tm_circle").removeClass("t_active").last().addClass("t_active");
        $("#testimonial_bg .tm_slide").removeClass("t_active").last().addClass("t_active");
        $("#testimonial_image .client_img").removeClass("t_active").last().addClass("t_active");
        $(".tm_quote").removeClass("t_active").last().addClass("t_active");
      } else {
        $(".t_active").removeClass("t_active").prev().addClass("t_active");
      }
    }
  });
});

// let menuToggle = document.querySelector('.menuToggle');
// menuToggle.onclick = function () {
//     menuToggle.classList.toggle('active');
// }

/*========== Start Portfolio Trigger Filterizr Js  ==========*/
$("#p_control ul li").on('click', function () {
  $(this).addClass('active').siblings("li").removeClass('active');
});
