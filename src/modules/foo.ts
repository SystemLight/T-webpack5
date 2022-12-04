export function sayFoo(data) {
  let div = document.createElement('div')
  div.innerText = 'Hello babel'
  div.className = 'rectangle  px-[30px]'
  document.body.appendChild(div)
  console.log('foo', data)
}
