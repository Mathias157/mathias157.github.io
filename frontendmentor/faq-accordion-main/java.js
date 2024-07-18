function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function open_answer(number) {
    const answer = document.getElementById(`A${number}`)
    const question = document.getElementById(`Q${number}`)
    const img = question.getElementsByTagName('img')
    
    answer.classList.add('show')

    img[0].setAttribute('style', 'opacity: 0.5')
    await wait(100)
    img[0].setAttribute('src', 'assets/images/icon-minus.svg')
    img[0].setAttribute('style', 'opacity: 1')
    img[0].setAttribute('onclick', `close_answer(${number})`)
}

async function close_answer(number) {
    const answer = document.getElementById(`A${number}`)
    const question = document.getElementById(`Q${number}`)
    const img = question.getElementsByTagName('img')
    
    answer.classList.remove('show')
    
    img[0].setAttribute('style', 'opacity: 0.5')
    await wait(100)
    img[0].setAttribute('src', 'assets/images/icon-plus.svg')
    img[0].setAttribute('style', 'opacity: 1')
    img[0].setAttribute('onclick', `open_answer(${number})`)
}