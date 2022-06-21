window.addEventListener('click', function (e) {

    let block = e.target.parentNode.dataset.block;


    if (block === "1" && e.target.classList.contains("green")) {

        e.target.classList.remove("green");
        e.target.classList.remove("pos_green");
        e.target.classList.add("pos_yellow");
        e.target.classList.add("yellow");


        console.log("Зеленый в Блоке 1");
    } else if (block === "1" && e.target.classList.contains("red")) {
        console.log("Красный в Блоке 1");
    } else if (block === "1" && e.target.classList.contains("blue")) {
        console.log("Синий в Блоке 1");
    } else if (block === "1" && (e.target.classList.contains("circle"))) {
        console.log("Фигура в Блоке 1");
    }


    if (block === "2" && e.target.classList.contains("green")) {

        e.target.classList.remove("green");
        e.target.classList.remove("pos_green");
        e.target.classList.add("yellow");
        e.target.classList.add("pos_yellow");

        console.log("Зеленый в Блоке 2");
    } else if (block === "2" && e.target.classList.contains("red")) {
        console.log("Красный в Блоке 2");
    } else if (block === "2" && e.target.classList.contains("blue")) {
        console.log("Синий в Блоке 2");
    } else if (block === "2" && (e.target.classList.contains("triangle"))) {
        console.log("Треугольник в Блоке 2");
    }

})
