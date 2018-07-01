import { Cookies } from 'react-cookie'

export const confirm = () => {
  let cookies = new Cookies()
  cookies.set('has_consented', true, { path: '/' })
  return {type: "CONSENT_CONFIRM_AND_HIDE"}
}

export const show = () => {
  return {type: "SHOW_CONSENT_PROMPT"}
}
