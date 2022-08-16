
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const inputVal = document.getElementById('input')
    const select = document.getElementById('select')
    const selectVal = select.value

    inValColor = inputVal.value
    inValColor = inValColor.substring(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${inValColor}&mode=${selectVal}`)
        .then(res => res.json())
        .then(data => {
            
            // ...utils.js      showing modes that come from the server
            
            document.getElementById('main').innerHTML = `
                <div id='color-div' style="background: ${data.colors[0].hex.value}"></div>
            `
        })
})
