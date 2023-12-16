const header = document.querySelector("header");
const scroll = document.createElement('div');

scroll.setAttribute('data-scroll', '');
header.before(scroll);

const n =new IntersectionObserver((entries) =>{
    header.classList.toggle('on-scroll',!entries[0].isIntersecting)
});

n.observe(scroll);


const navBtn = document.querySelector('#toggler');
const navDiv = document.querySelector('.links');
const icon = document.querySelector('#bar');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('show');
    icon.classList.toggle('bx-x')
});

const remove = () => {
  navDiv.classList.remove('show');
  icon.classList.remove('bx-x')
}



window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});







const backend = document.getElementById("backend")
const ForntEnd = document.getElementById("forntend")
const Data = document.getElementById("data")

const return1 = document.getElementById("return")


const Backend_skills = document.getElementById("Backend-skills")
const frontend_skills = document.getElementById("frontend_skills")
const data_skills = document.getElementById("data_skills")

// const java = document.getElementById("java")
// const python = document.getElementById("py")
// const node = document.getElementById("node")


// const html = document.getElementById("html")
// const css = document.getElementById("css")
// const js = document.getElementById("js")



// const sql = document.getElementById("sql")
// const Scikit = document.getElementById("Scikit")
// const Pandas = document.getElementById("Pandas")
// const Matplotlib = document.getElementById("matplotlib")

const show = document.getElementById("show")




// .skills .container .mySkills #backend, #forntend, #data{
//   cursor: pointer;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
  
// }
// #Backend-skills, #data_skill, #frontend_skills{
//   margin-top: 139px;
//   position: relative;
//   left: 50%;
//   transform: translateX(-41%);
// }

backend.addEventListener("click", function dis(){
  Backend_skills.style.display = "flex";
  ForntEnd.style.display = "none";
  Data.style.display = "none";
  return1.style.display = "block"
  // backend.style.position = 'absolute';
  // backend.style.left = '50%';
  // backend.style.transform = 'translateX(-50%)';
  backend.style.margin='auto';
})
ForntEnd.addEventListener("click", function dis(){
  frontend_skills.style.display = "flex"
  backend.style.display = "none"
  Data.style.display = "none"
  return1.style.display = "block"

  ForntEnd.style.margin='auto';
})
Data.addEventListener("click", function dis(){
  data_skills.style.display = "flex"
  ForntEnd.style.display = "none"
  backend.style.display = "none"
  return1.style.display = "block"

  Data.style.margin='auto';
})

return1.addEventListener("click", function hide(){
  Backend_skills.style.display="none"
  frontend_skills.style.display="none"
  data_skills.style.display="none"
  return1.style.display = "none"

  ForntEnd.style.display = "flex"
  Data.style.display = "flex"
  backend.style.display = "flex"
})
