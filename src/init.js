import i18next from 'i18next'
import resources  from './locale/index.js'
import renderElText from './components/renderElText.js'


export default () => {
const defaultLang = 'ru' 
const i18Instance = i18next.createInstance()
i18Instance.init({
    lng: defaultLang,
    debug: true,
    resources,
})

 const elements = {
    div: document.getElementById('main-text'),
    label: document.getElementById('main-rule'),
 }

  renderElText(elements, i18Instance)

}