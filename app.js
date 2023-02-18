const hamburger = document.querySelector(".navImg");
const navMain = document.querySelector(".navMain");
const cancel = document.querySelector(".navImg2");
const allLinks = document.querySelectorAll("ul li");
const navbar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  NavFunc();
  iconFunc();
  navbar.classList.add("pos_fixed");
});

cancel.addEventListener("click", () => {
  NavFunc();
  iconFunc();
  navbar.classList.remove("pos_fixed");
});

allLinks.forEach(function (singleLink) {
  singleLink.addEventListener("click", () => {
    NavFunc();
    iconFunc();
  });
});

const NavFunc = () => {
  if (navMain.classList.contains("show")) {
    navMain.classList.remove("show");
  } else {
    navMain.classList.add("show");
  }
};

const iconFunc = () => {
  if (hamburger.classList.contains("hideHam")) {
    hamburger.classList.remove("hideHam");
    cancel.classList.remove("navImg22");
  } else {
    hamburger.classList.add("hideHam");
    cancel.classList.add("navImg22");
  }
};

// owl carousel



//start of testimonials page
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Saif Khan',
    position: 'Front End Developer',
    photo:
      'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
  },
  {
    name: 'Azfar Uzair',
    position: 'Software Engineer',
    photo: 'https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      '“We get here the best quality products at a really good affordable price.”',
  },
  {
    name: 'Karim Ahmed',
    position: 'Architect',  
    photo: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "“The best quality products you can ever find!”",
  },
  {
    name: 'Asad Ahmed',
    position: 'Researcher',
    photo: 'https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60',
    text:
      "“The delivery of the good was super quick! highly satisfied with the service.”",
  },
  
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
//end of testimonials page
