window.addEventListener('DOMContentLoaded', () => {
    const isSigninForm = !!document.getElementById('page-login-index')

    const button = document.querySelector('.potentialidp a')
    if (isSigninForm) button?.click()

})
