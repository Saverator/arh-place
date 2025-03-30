const cardTitles = document.querySelectorAll('.full-info-titles__title')
const cardTargets = document.querySelectorAll('[data-info-content]')

removeTargets()
cardTargets[0].style.display = 'flex'


cardTitles.forEach(title => {
    title.addEventListener('click', () => {
        cardTitles.forEach(el => {
            el.classList.remove('active')
        })

        title.classList.add('active')
        switchTarget(title)
    })
})

function switchTarget(el) {
    const targetName = el.dataset.infoTitle

    const target = document.querySelector(`[data-info-content=${targetName}]`)
    removeTargets()
    target.style.display = 'flex'
}

function removeTargets() {
    cardTargets.forEach(target => {
        target.style.display = 'none'
    })
}