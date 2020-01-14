const siteContent = {
  "nav": {
    "nav-item-1": "Servicess",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Featuresssss content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
  "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// UPDATED NAVAGATION CODE
var navLinks = document.querySelectorAll('a');
navLinks[0].text= siteContent['nav']['nav-item-1']
navLinks[1].text= siteContent['nav']['nav-item-2']
navLinks[2].text= siteContent['nav']['nav-item-3']
navLinks[3].text= siteContent['nav']['nav-item-4']
navLinks[4].text= siteContent['nav']['nav-item-5']


// UPDATED HEADER TEXT PLUS LOGO
//header text code
var headerText = document.querySelector('h1');
headerText.textContent= siteContent['cta']['h1']
headerText.style.color="blue"
var headerButton = document.querySelector('button');
headerButton.textContent = siteContent['cta']['button']
headerButton.style.color ='red'

// header logo code
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])
//UPDATED MIDDLE SECTION 
// middle section text CODE
var middleTitle = document.querySelectorAll('h4');
middleTitle[0].textContent=siteContent['main-content']['features-h4']
middleTitle[1].textContent=siteContent['main-content']['about-h4']
var middleText = document.querySelectorAll('p');
middleText[0].textContent=siteContent['main-content']['features-content']
middleText[1].textContent=siteContent['main-content']['about-content']
//middle section loge CODE
let middleLogo= document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])
// below middle image text CODE
middleTitle[2].textContent=siteContent['main-content']['features-h4']
middleTitle[3].textContent=siteContent['main-content']['services-h4']
middleTitle[4].textContent=siteContent['main-content']['product-h4']
var middleText = document.querySelectorAll('p');
middleText[2].textContent=siteContent['main-content']['services-content']
middleText[3].textContent=siteContent['main-content']['product-content']
middleText[4].textContent=siteContent['main-content']['vision-content']
//UPDATED FOOTER CODE
middleTitle[5].textContent=siteContent['contact']['contact-h4']
middleText[5].textContent=siteContent['contact']['address']
middleText[6].textContent=siteContent['contact']['phone']
middleText[7].textContent=siteContent['contact']['email']
middleText[8].textContent=siteContent['footer']['copyright']
// NEW CONTENT
//change nav color to green
const navColor= document.querySelectorAll('a');
console.log(navColor)
navColor.forEach(element => {
  element.style.color="green"
})
 // prepend append new links
const newLink= document.querySelector('nav');
newLink.append('Append Link')
newLink.prepend('Prepend link')
