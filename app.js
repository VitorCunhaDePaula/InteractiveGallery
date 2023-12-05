(function (){
    let imagensLink = document.querySelectorAll("a");
    let imagens = document.querySelectorAll("a img");
    let close = document.querySelector(".close");
    let fullImgDiv = document.querySelector(".fullImgDiv");
    let fullImgCenter = document.getElementById("fullImgCenter")


    // Eventos relacionados a tag <a>
    imagensLink.forEach(img =>{
        img.addEventListener("mouseover", function(){
         img.style.opacity = "1";
         img.style.transform = "rotate(-15deg)";
         img.style.transition = "transform 0.5s ease-in"
         
        })

        img.addEventListener("mouseout", function(){
            img.style.opacity = "0.4";
            img.style.transform  = "rotate(0)"
        })

        
    })
     // Eventos relacionados a tag <img>
    imagens.forEach(imagens =>{
        imagens.addEventListener("mouseover", function(){
            imagens.style.transform = "scale(1.5)"
            imagens.style.transition = "transform 1s ease-in"
        })

        imagens.addEventListener("mouseout", function(){
            imagens.style.transform = "scale(1)"
        })
        imagens.addEventListener("click", function(){
            fullImgDiv.style.display="flex";
            fullImgCenter.src = imagens.src;
        })
    })

    close.addEventListener("click", function(){
        fullImgDiv.style.display = "none";
    })



})()