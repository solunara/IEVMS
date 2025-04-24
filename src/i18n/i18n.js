import { createI18n } from 'vue-i18n'
import zh from '@/i18n/lang/zh'
import en from '@/i18n/lang/en'

const messages = {
    en,
    zh,
}

const i18n = createI18n({
    legacy: false, // 用来处理报错，必须写，否则传统模式下不起作用
    locale: localStorage.getItem('lang') || 'zh',
    messages
})

export default i18n