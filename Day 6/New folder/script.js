setTimeout(() => {
    console.log('Timeout 1....')

}, 2000)
console.log('start')
setTimeout(() => {
    console.log('Timeout 2...')
}, 1000)
console.log('intermediate')
console.log('end')