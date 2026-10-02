import DefaultTheme from 'vitepress/theme-without-fonts'
import SkillCard from '../../components/SkillCard.vue'
import SkillsCatalog from '../../components/SkillsCatalog.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SkillCard', SkillCard)
    app.component('SkillsCatalog', SkillsCatalog)
  }
}