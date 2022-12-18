import type {ResponseData} from '@/interfaces'

export function sayFoo(data: ResponseData) {
  let div = document.createElement('div')
  div.innerText = 'Hello babel'
  // div.className = 'rectangle text-center px-[30px] fixed right-3 bottom-3'
  div.className = 'rectangle'
  document.body.appendChild(div)
  console.log('foo', data)
}
