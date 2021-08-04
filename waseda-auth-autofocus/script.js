window.addEventListener('load', () => {
    document.getElementById('j_username')?.focus()
})

window.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        document.getElementById('btn-save')?.click()
    }
})
