var net_fun = '/.netlify/functions/'
var net_host = 'http://localhost'
// var net_host = 'https://tifun.netlify.app'

getTools()
async function getTools() {

    var res = await (await fetch(net_host + net_fun + 'utils')).json()
    res = res.filter(val => val.cat === 'Online tools I use')

    let ul = document.createElement('ul')
    //@ts-ignore
    document.getElementById('tools_content').append(ul)
    for (let elem of res) {
        let li = document.createElement('li')
        li.textContent = elem.text
        ul.append(li)
    }
}