{
    window.addEventListener('keydown', (e) => {
        const button = document.getElementsByClassName('play-radio')[0]
        const isTyping = document.activeElement.tagName === 'INPUT'

        if (!isTyping && e.code == 'Space' && button) {
            e.preventDefault()
            button.click()
        }
    })
}
