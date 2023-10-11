const on = document.getElementById('onBulb')
const off = document.getElementById('offBulb')
const bulb1 = document.getElementById('bulb1')
const bulb2 = document.getElementById('bulb2')
const bulb3 = document.getElementById('bulb3')
// console.log(bulb1,bulb2,bulb3)
off.style.display = 'none'
on.style.display = 'block'

function onHandler() {
    // console.log("==>>on")
    bulb1.src = './bulb-images/bulb-1-on.png'
    bulb2.src = './bulb-images/bulb-2-on.png'
    bulb3.src = './bulb-images/bulb-3-on.png'
    off.style.display = 'block'
    on.style.display = 'none'
}

function offHandler() {
    // console.log("==>>off")
    bulb1.src = './bulb-images/bulb-1-off.png'
    bulb2.src = './bulb-images/bulb-2-off.png'
    bulb3.src = './bulb-images/bulb-3-off.png'
    off.style.display = 'none'
    on.style.display = 'block'
}