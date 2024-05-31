let win = window;
let dom = document;
let head = dom.head;
let body = dom.body;
let title = dom.title;
let title2 = dom.querySelector('title')
let header = dom.querySelector('header')
let parrafos = dom.querySelectorAll('a')
let estructura = dom.getElementsByClassName('estructura')
let lista = dom.getElementsByClassName('lista')
const item = dom.querySelectorAll('ul.list > li.item')
const padre = dom.querySelector('ul')
const obtener = dom.getElementById('documento')
const boton = dom.getElementById('cambiar')
console.log(dom)
console.log(dom.links)
console.log(win)
console.log(head)
console.log(body)
console.log(title)
console.log(title2)
console.log(header)
console.log(parrafos[1])
console.log(estructura)
console.log(item)
console.log(padre.lastElementChild)
console.log(padre.firstElementChild)
console.clear()
documento.innerHTML = 'tontin'
console.log(obtener)
const a = body.style.background

console.log(document)
