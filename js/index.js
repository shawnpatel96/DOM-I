const siteContent = {
  "nav": {
    "nav-item-1": "Services",
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
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
navLinks[0].textContent="Services"
navLinks[1].textContent="Product"
navLinks[2].textContent="Vison"
navLinks[3].textContent="Feature"
navLinks[4].textContent="About"
navLinks[5].textContent="Contact"



// UPDATED HEADER TEXT PLUS LOGO

//header text code

var headerText = document.querySelector('h1');
headerText.textContent="DOM IS AWESOME"
var headerButton = document.querySelector('button');
headerButton.textContent="Get Started"
headerText.style.color="red";
headerButton.style.fontFamily="'Cedarville Cursive', cursive"
headerButton.style.fontSize='20px'
headerButton.style.color='blue'

// header logo code
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])


//UPDATED MIDDLE SECTION 
// middle section text CODE


var middleTitle = document.querySelectorAll('h4');
middleTitle[0].textContent="Features"
middleTitle[1].textContent="About"


var middleText = document.querySelectorAll('p');
middleText[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
middleText[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//middle section loge CODE

let middleLogo= document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// below middle image text CODE
middleTitle[2].textContent="Services"
middleTitle[3].textContent="Product"
middleTitle[4].textContent="Vision"

var middleText = document.querySelectorAll('p');
middleText[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
middleText[3].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
middleText[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//UPDATED FOOTER CODE
middleTitle[5].textContent="Contact"

middleText[5].textContent="123 Way 456 Street Somewhere, USA"
middleText[6].textContent="1 (888) 888-8888"
middleText[7].textContent="sales@greatidea.io"
middleText[8].textContent="CopyRight Great Idea! 2020"




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













