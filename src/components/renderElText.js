export default (elements, i18next) => {
    const {div, label} = elements
    div.textContent = i18next.t('main_title'),
    label.textContent = i18next.t('game_rule')
}