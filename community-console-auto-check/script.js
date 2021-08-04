(function autoCheck() {
    const forums = [
        'Gmail',
        'Google Chrome',
        'Google Pixel',
        'Google Play',
        'Google アカウント',
        'Google アシスタント',
        'Google 検索',
        'ゴールド+',
        'シルバー+',
        'Google グループ'
    ]
    const excludes = [
        'セントラル'
    ]

    // 一度すべてのチェックボックスを外す
    document.querySelectorAll(`.drawer-panel-body [role=listitem]`).forEach(el => {
        if (el.querySelector('[aria-checked=true')) {
            el.click()
        }
    })

    document.querySelectorAll(`.drawer-panel-body [role=listitem]`).forEach(el => {
        if (
            forums.some(forumName => el.textContent.includes(forumName)) &&
            excludes.every(forumName => !el.textContent.includes(forumName))
        ) {
            el.click()
        }
    })
})()
