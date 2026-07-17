
const developersData = [
  {
    id: 0 ,
    name: "Saqib hussain",
    img: "../src/Saqib.jpg",
    working: " - Javascript and Python developer.",
    socialmedia: {
      githuburl : "https://github.com/Saqibhussain596",
      linkdnurl : "https://www.linkedin.com/in/saqib-hussain-4a649a221/",
      errorurl : "index3.html"
    }
  },

  {
    id: 1 ,
    name: "Muneer Abbas",
    img: "../src/Muneer.jpg",
    working:" Frontend-Html and Css developer.",
    socialmedia: {
      githuburl : "https://github.com/Muneerabbas",
      linkdnurl : "https://www.linkedin.com/in/muneer-abbas-67a095285/",
      errorurl : "index3.html"
    }
  },

  {
    id: 2 ,
    name: "Azhar Hussain",
    img: "../src/Azhar.jpg",
    working: "Frontend - Html, Css and Javascript developer.",
    socialmedia: {
      githuburl : "index3.html",
      linkdnurl : "https://www.linkedin.com/in/azhar-ganaie-0b5ba1256/",
      errorurl : "index3.html"
    }
  },

  {
    id: 3 ,
    name: "S.M Talha",
    img: "../src/Talha.jpg",
    working: "Backend - Python , Javascript and C++ developer.",
    socialmedia: {
      githuburl : "https://github.com/talha2683",
      instaurl : "https://www.instagram.com/s.m_talha01/",
      linkdnurl : "https://www.linkedin.com/in/s-m-talha-431b91290/",
      errorurl : "index3.html"
    }
  },

  {
    id: 4 ,
    name: "Akeel Abbas",
    img: "../src/Akkubhaiya.jpeg",
    working: "Backend - C++ and Javascript.",
    socialmedia: {
      githuburl : "index.html",
      linkdnurl : "https://www.linkedin.com/in/akeel-abbas-a04361168/",
      errorurl : "index3.html"
    }
  },

  {
    id: 5 ,
    name: "Sohail Abbas",
    img: "../src/Sohial.jpg",
    working: " - Javascript and Python developer.",
    socialmedia: {
      githuburl : "index3.html",
      linkdnurl : "index3.html",
      errorurl : "index3.html"
    }
  },

  {
    id: 6 ,
    name: "Zeeshan Hyder",
    img: "../src/Zeeshan.png",
    working: " - Javascript and Python developer.",
    socialmedia: {
      instaurl : "https://www.instagram.com/instazeeshan/",
      githuburl : "index3.html",
      linkdnurl : "index3.html",
      errorurl : "index3.html"
    }
  },

  {
    id: 7 ,
    name: "Rahil Rayees",
    img: "../src/Rahil rayees.jpeg",
    working: " SQL Developer.",
    socialmedia: {
      linkdnurl : "https://www.linkedin.com/in/rahil-rayees-08ba1826a/",
      githubnurl : "https://github.com/RahilRayees",
      errorurl : "index3.html"
    }
  }
]



const cardcontainer = document.querySelector(".all-card1-container");

cardcontainer.innerHTML = 
`<div class="all-card1s"  id="all-card1s-1st-id">
          <div class="heading-front-back-dev">
          <h1>Frontend <b class="front-back-division">&</b> Backend</h1>
        </div>
          <div class="allcard1s">
            <div class="card1">
              <h3>${developersData[0].name}</h3>
              <div class="image-all">
                <img src="${developersData[0].img}" alt="" />
              </div>
              <p>${developersData[0].working}</p>
              <div class="i-stack">
               <a href="${developersData[0].socialmedia.errorurl}"target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[0].socialmedia.githuburl}"target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[0].socialmedia.linkdnurlurl}" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="${developersData[0].socialmedia.errorurl}" target="_blank"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
            <div class="card1">
              <h3>${developersData[1].name}</h3>
              <div class="image-all">
                <img src="${developersData[1].img}" alt="" />
              </div>
              <p>${developersData[1].working}</p>
              <div class="i-stack">
                <a href="${developersData[1].socialmedia.errorurl}" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[1].socialmedia.githuburl}"target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[1].socialmedia.linkdnurl}" target="_blank"
                  ><i class="fa fa-linkedin"></i
                ></a>
                <a href="${developersData[1].socialmedia.errorurl}" target="_blank"><i class="fa fa-youtube"></i></a>
              </div>
            </div>
            <div class="card1">
              <h3>${developersData[2].name}</h3>
              <div class="image-all">
                <img src="${developersData[2].img}" alt="" />
              </div>
              <p>${developersData[2].working}</p>
              <div class="i-stack">
                <a href="${developersData[2].socialmedia.errorurl}" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[2].socialmedia.errorurl} " target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[2].socialmedia.linkdnurl}" target="_blank"
                  ><i class="fa fa-linkedin"></i
                ></a>
                <a href="${developersData[2].socialmedia.errorurl} " target="_blank"><i class="fa fa-youtube"></i></a>
              </div>
            </div>

            <div class="card1">
              <h3>${developersData[3].name}</h3>
              <div class="image-all">
                <img src="${developersData[3].img}" alt="" />
              </div>
              <p>${developersData[3].working}</p>
              <div class="i-stack">
                <a href="${developersData[3].socialmedia.instaurl}" target="_blank"
                  ><i class="fa fa-instagram"></i
                ></a>
                <a href="${developersData[3].socialmedia.githuburl}" target="_blank"
                  ><i class="fa fa-github"></i
                ></a>
                <a href="${developersData[3].socialmedia.errorurl}"target="_blank" ><i class="fa fa-linkedin"></i></a>
                <a href=${developersData[3].socialmedia.errorurl}" target="_blank"><i class="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="all-card1s">
          <div class="allcard1s">
            <div class="card1">
              <h3>${developersData[4].name}</h3>
              <div class="image-all">
                <img
                  src="${developersData[4].img}"
                  alt=""
                />
              </div>
              <p>${developersData[4].working}</p>
              <div class="i-stack">
                <a href="${developersData[4].socialmedia.errorurl}l" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[4].socialmedia.errorurl}" target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[4].socialmedia.linkdnurl}" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="${developersData[4].socialmedia.errorurl}" target="_blank"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
             <div class="card1">
              <h3>${developersData[5].name}</h3>
              <div class="image-all">
                <img
                  src="${developersData[5].img}"
                  alt=""
                />
              </div>
              <p>${developersData[5].working}</p>
              <div class="i-stack">
                <a href="${developersData[5].socialmedia.errorurl}l" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[5].socialmedia.errorurl}" target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[5].socialmedia.linkdnurl}" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="${developersData[5].socialmedia.errorurl}" target="_blank"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
              <div class="card1">
              <h3>${developersData[6].name}</h3>
              <div class="image-all">
                <img
                  src="${developersData[6].img}"
                  alt=""
                />
              </div>
              <p>${developersData[6].working}</p>
              <div class="i-stack">
                <a href="${developersData[6].socialmedia.errorurl}l" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="${developersData[6].socialmedia.errorurl}" target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[6].socialmedia.linkdnurl}" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="${developersData[6].socialmedia.errorurl}" target="_blank"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
              <div class="card1">
              <h3>${developersData[7].name}</h3>
              <div class="image-all">
                <img
                  src="${developersData[7].img}"
                  alt=""
                />
              </div>
              <p>${developersData[7].working}</p>
              <div class="i-stack">
                <a href="${developersData[7].socialmedia.errorurl}" target="_blank"><i class="fa fa-github"></i></a>
                <a href="${developersData[7].socialmedia.linkdnurl}" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="${developersData[7].socialmedia.errorurl}" target="_blank"><i class="fa fa-twitter"></i></a>
              </div>
            </div>`

 