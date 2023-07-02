import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
import tour5 from "./images/tour-5.jpeg"


export const pageLinks = [{ id:1, text: "Home", url: "/#home" , className: "nav-link" }, 
{ id:2, text: "About", url: "/#about",className: "nav-link" }, 
{ id:3, text: "Services", url: "/#services",className: "nav-link" }, 
{ id:4, text: "Tours", url: "/#tours" ,className: "nav-link"}, 
]



export const socialLinks = [ 
{ id:1, url: "https://www.facebook.com", className: "nav-icon", icon: "fab fa-facebook" },
{ id:2, url: "https://www.twitter.com", className: "nav-icon", icon: "fab fa-twitter" },
{ id:3, url: "https://www.instagram.com", className: "nav-icon", icon: "fab fa-instagram" },
{ id:4, url: "https://www.google.com", className: "nav-icon", icon: "fab fa-google-plus" },

]



export const services = [{ id:1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
]

export const tours = [{ id:1, name: "the sea explorer", price: 29.99, image: tour1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:2, name: "the forest hiker", price: 39.99, image: tour2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:3, name: "the snow adventurer", price: 49.99, image: tour3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:4, name: "the sea explorer", price: 59.99, image: tour4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
{ id:5, name: "the sea travel", price: 69.99, image: tour5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
]