const fill = document.querySelector('.fill')
const boxes = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
})

function dragStart() {
    console.log('drag-start')
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    console.log('drag-leave')
    this.classList.remove('hovered')
}

function dragDrop() {
    console.log('drag-drop')
    this.className = 'empty'
    this.append(fill) //apeending the fill element to the .empty div as a children which has draggable to true
}