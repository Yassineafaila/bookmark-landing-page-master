let hamburger = document.querySelector(".hamburger");
let x = document.querySelector(".close");
let list = document.querySelector(".list");
let overlay = document.querySelector(".overlay");
let logo = document.querySelector(".logo");
let btndown = document.querySelectorAll(".down");
let btnup = document.querySelectorAll(".up");
let imgerror = document.querySelector("img[alt='error']");
let inputEmail = document.querySelector("#email");
let emailContainer = document.querySelector(".email-container");
let perror=document.querySelector(".email-container p")
let form = document.querySelector("form");
let submit=document.querySelector("input[type='submit'")
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
hamburger.addEventListener("click", function () {
    list.classList.add("active");
    overlay.classList.add("active");
    logo.classList.add("active");
    x.classList.add("active");
    hamburger.classList.add("notactive")

});
x.addEventListener("click", function () {
    list.classList.remove("active");
    overlay.classList.remove("active");
    logo.classList.remove("active");
    x.classList.remove("active");
    hamburger.classList.remove("notactive")

});
//tabs:
let buttons = document.querySelectorAll(".buttons-list li button");
let content = document.querySelector(".content");



let dataoftabs = [
  {
    id: 0,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: "/images/illustration-features-tab-1.svg"
  },
  {
    id: 1,
    title: " Intelligent search ",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: "/images/illustration-features-tab-2.svg"
  },
  {
    id: 2,
    title: "Share your bookmarks Easily",
    desc: " share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "/images/illustration-features-tab-3.svg"
  },
];

// buttons.forEach((btn) => {

//     if (btn.classList.contains("active")) {
//         for (let i = 0; i < dataoftabs.length; i++){
//             if (dataoftabs[i].button === btn.value) {
//                 let div = document.createElement("div");
//                 div.className =
//                     "img-container w-100 d-flex align-items-center justify-content-center";
//                 let img = document.createElement("img");
//                 img.src = dataoftabs[i].image;
//                 div.append(img)
//                 let h2 = document.createElement("h2");
//                 h2.textContent = dataoftabs[i].title;
//                 let p = document.createElement("p");
//                 p.textContent = dataoftabs[i].desc;
//                 let btn = document.createElement("button");
//                 btn.textContent = dataoftabs[i].link;
//                 content.append(h2);
//                 content.append(p);
//                 content.append(btn);
//                 content.before(div);
//             }
//         }
        
//     }
// })
buttons.forEach((btn, index) => {

  btn.addEventListener("click", function () {
    buttons.forEach((tab) => {
      tab.classList.remove("active");
    });
    btn.classList.add("active");

    
    content.innerHTML = `<div class="content-image text-lg-start gap-1 text-center mx-auto">
    <h2>${dataoftabs[index].title}</h2>
    <p>${dataoftabs[index].desc}</p>
    <button>${dataoftabs[index].link}</button>
    </div>`;
    let imagehandler = document.createElement("div")
    imagehandler.className = "img-container w-100 d-flex align-items-center justify-content-center";
    imagehandler.innerHTML = `<img src="${dataoftabs[index].image}">`
    content.prepend(imagehandler)
  })
});
///code for the section of qestion and answers:
btndown.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.parentElement.nextElementSibling.classList.add("show");

    btn.nextElementSibling.classList.add("show");

    btn.style.display = "none";
  });
});

btnup.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.parentElement.nextElementSibling.classList.remove("show");

    btn.classList.remove("show");

    btn.previousElementSibling.style.display = "block";
  });
});
form.addEventListener("submit", function () {
  if (regex.test(inputEmail)) {
    console.log(hi)
  } else {
    emailContainer.classList.add("error");
    imgerror.classList.add("error");
    perror.classList.add("error");
    submit.style.alignSelf = "start";
  }
})