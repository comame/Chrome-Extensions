window.addEventListener('keydown', e => {
    if (!e.altKey) return
    switch (e.key) {
        case 'j': {
            e.preventDefault()
            e.stopPropagation()
            history.back()
            break
        }
        case 'k': {
            e.preventDefault()
            e.stopPropagation()
            history.forward()
            break
        }
    }
}, {
    capture: true
})
