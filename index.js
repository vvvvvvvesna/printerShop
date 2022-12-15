var elements = document.getElementsByClassName("order-card")

for (var i = 0; i < elements.length; i++) {
    console.log(elements[0]);
    elements[i].addEventListener("mouseover", (event) => {
        console.log(event.fromElement);
        event.fromElement.children[0].style.borderColor = "#44c4e";
    });
    elements[i].addEventListener("mouseout", (event) => {
        console.log(event.fromElement);
        event.fromElement.children[0].style.borderColor = "rgba(0,0,0,0.175)";
    });
}