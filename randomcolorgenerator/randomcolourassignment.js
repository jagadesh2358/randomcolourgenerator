function color() {
    let color = '#'
    let color1 = '#'
    let color2 = '#'
    let color3 = '#'
    let color4 = '#'
    let arrcolour = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let b = arrcolour.length
    for (i = 0; i < 6; i++) {
        let c = Math.floor(Math.random() * 22);
        let c1 = Math.floor(Math.random() * 22);
        let c2 = Math.floor(Math.random() * 22);
        let c3 = Math.floor(Math.random() * 22);
        let c4 = Math.floor(Math.random() * 22);
        color += arrcolour[c]
        color1 += arrcolour[c1]
        color2 += arrcolour[c2]
        color3 += arrcolour[c3]
        color4 += arrcolour[c4]

    }
    document.body.style.backgroundColor = color

    document.getElementById("j").style.color = color1

    document.getElementById("sp").style.color = color2

    document.getElementById("j").style.webkitTextStrokeColor = color3

    document.getElementById("sp").style.webkitTextStrokeColor = color4
}