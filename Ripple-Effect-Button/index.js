const btn = document.querySelector('.btn')

btn.addEventListener('click', e => {
    const x = Math.ceil(e.offsetX)
    const y = Math.ceil(e.offsetY)

    btn.innerHTML = `Click ME <span class="circle" style="top: ${y}px; left: ${x}px"></span>`
})