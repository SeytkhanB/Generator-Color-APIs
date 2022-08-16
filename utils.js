
let selection = ''
let schemes = data._links.schemes
for (let scheme in schemes) {
    selection += `<option>${scheme}</option>`
}
document.getElementById('select').innerHTML = selection