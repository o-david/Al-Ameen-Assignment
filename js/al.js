var size=50
function minus(){
    size=size-2;
    var change = document.getElementById("change")
    change.style.color="blue"
    change.style.fontSize= `${size}pt`
    change.innerHTML= "Mr David"
}
function add(){
    size+=2
    var change = document.getElementById("change")
    change.style.color="red"
    change.style.fontSize= `${size}pt`
    change.innerHTML= "Al Ameen"
}