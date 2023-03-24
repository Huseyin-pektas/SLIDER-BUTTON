const colorsContainer = document.getElementById("colorsContainer")
const btn = document.getElementById("btn")
const baslik = document.getElementById("baslik")
const bigColor =document.getElementById("bigColor")


// BURADA FOR DÖNGÜSÜNÜ KULLANACAĞIM

const buttons =["red", "blue", "yellow", "green", "gray", "pink"]

for(let sayac=0; sayac<buttons.length;sayac++){

    const color = document.createElement("div");
    color.id= buttons[sayac];
    color.classList.add("smallBox")
    color.style.backgroundColor=buttons[sayac];
   

    color.addEventListener("click", function(){
        bigColor.style.backgroundColor=buttons[sayac];
        setTimeout(function(){
            bigColor.style.backgroundColor=""
        }, 4000)
    });
    colorsContainer.appendChild(color)
}




// const color1 =document.createElement("div")
// color1.id ="red"
// color1.classList.add("smallBox")
// color1.style.backgroundColor="red";



// const color2 = document.createElement("div")
// color2.classList.add("smallBox")
// color2.id="blue"
// color2.style.backgroundColor="blue";


// const color3 =document.createElement("div")
// color3.id ="yellow"
// color3.classList.add("smallBox")
// color3.style.backgroundColor="yellow";

// color1.addEventListener("click", function(){
//     bigColor.style.backgroundColor="red"
//     setTimeout(function(){
//         bigColor.style.backgroundColor=""
//     }, 4000)
// })

// color2.addEventListener("click", function(){
//     bigColor.style.backgroundColor="blue"
//     setTimeout(function(){
//         bigColor.style.backgroundColor=""
//     }, 4000)
// })

// color3.addEventListener("click", function(){
//     bigColor.style.backgroundColor="yellow"
//     setTimeout(function(){
//         bigColor.style.backgroundColor=""
//     }, 4000)
// })


// colorsContainer.appendChild(color1)
// colorsContainer.appendChild(color2)
// colorsContainer.appendChild(color3)


btn.addEventListener("click",function(){
  baslik.innerText="Hoş Geldiniz"
  baslik.style.color="red"
  setTimeout(function(){
    baslik.innerText="Merhaba Dünya"

  }, 4000)
})
