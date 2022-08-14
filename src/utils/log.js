export function log(issuer, msg) {
  console.log(
    `%c${issuer}: %c${msg}`,
    'color:#E53A40;background:#E0E3DA;padding:3px;margin-right:5px;border-radius:3px;',
    ''
  )
}
