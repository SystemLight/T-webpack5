import {log} from './log'

interface RequestErrorMessage {
  code: number
  type: 'error' | 'login'
  message: string
}

export function getToken() {
  return ''
}

export function handleRequestMessage(msg: RequestErrorMessage) {
  log('handleRequestMessage', msg.message)
}
