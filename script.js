let ol = document.getElementById('infi-list')
let i = 11;
ol.addEventListener('scroll', () => {
    let li = document.createElement('li')
    li.innerHTML = `Item ${i++}`
    ol.appendChild(li)
})