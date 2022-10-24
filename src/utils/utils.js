function padTo2Digits (num) {
  return num.toString().padStart(2, '0')
}

export function convertMsToMinutesSeconds (milliseconds) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = Math.round((milliseconds % 60000) / 1000)

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`
}

export function formatDate (date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear()
  ].join('/')
}
