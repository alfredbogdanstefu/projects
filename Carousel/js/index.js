function setCarouselImage(index, direction) {
    var images = ["image-1","image-2","image-3","image-4"];
    var carouselImage = document.getElementById("carousel-image");
    var src = "img/";
    if (direction === "next") {
        if (index == images.length-1) {
            carouselImage.setAttribute("src", src.concat(images[0], ".jpg"));
            carouselImage.setAttribute("index", "0");
        } else {
            carouselImage.setAttribute("src", src.concat(images[Number(index)+1], ".jpg"));
            carouselImage.setAttribute("index", Number(index)+1);
        }
    } else if (direction === "prev") {
        if (index == 0) {
            carouselImage.setAttribute("src", src.concat(images[images.length-1], ".jpg"));
            carouselImage.setAttribute("index", images.length-1);
        } else {
            carouselImage.setAttribute("src", src.concat(images[Number(index)-1], ".jpg"));
            carouselImage.setAttribute("index", Number(index)-1);
        }
    }
}

function onClickNext() {
    var carouselImage = document.getElementById("carousel-image");
    var carouselImageIndex = carouselImage.getAttribute("index");
    var direction = "next"; 
    setCarouselImage(carouselImageIndex, direction);
}

function onClickPrev() {
    var carouselImage = document.getElementById("carousel-image");
    var carouselImageIndex = carouselImage.getAttribute("index");
    var direction = "prev"; 
    setCarouselImage(carouselImageIndex, direction);
}