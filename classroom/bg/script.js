const input =
document.getElementById("colorInput")

const changeBtn =
document.getElementById("changeBtn")

const generateBtn =
document.getElementById("generateBtn")


function isValidHex(color) {

return /^[0-9A-F]{6}$/i.test(color)

}


changeBtn.onclick = function () {

let value =
input.value.trim()


if (isValidHex(value)) {

document.body.style.backgroundColor =
"#" + value

}

else {

alert("Введите 6 HEX символов")

}

}


generateBtn.onclick = function () {

const letters =
"0123456789ABCDEF"


let color = ""


for (let i = 0; i < 6; i++) {

color +=
letters[Math.floor(Math.random() * 16)]

}


input.value = color

document.body.style.backgroundColor =
"#" + color

}