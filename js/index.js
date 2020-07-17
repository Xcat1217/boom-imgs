// 图片路径
var imgs = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg', './imgs/6.jpg', './imgs/7.jpg', './imgs/8.jpg', './imgs/9.jpg']
// z-index值
var z = 999999
// 显示第几张图片
var index = 0
var imgNav = document.getElementById('img-nav')

// l 代表几行， t 代表几列
boom(10, 10)
function boom(l, t) {
    // 创建一个新的div
    var oPrantNode = document.createElement('div')
    // 设置z-index值
    oPrantNode.style.zIndex = z
    z--
    imgNav.appendChild(oPrantNode)
    // 把小div随机的循环出来
    var x = l, y = t
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            // 创建碎片
            var oDiv = document.createElement('div')
            // 添加背景图片
            oDiv.style.background = `url(${imgs[index]})`
            oDiv.style.width = imgNav.clientWidth / x + 'px'
            oDiv.style.height = imgNav.clientHeight / y + 'px'
            oDiv.style.left = (imgNav.clientWidth / x) * j + 'px'
            oDiv.style.top = (imgNav.clientHeight / y) * i + 'px'
            oDiv.style.backgroundPositionX = (imgNav.clientWidth / x) * -j + 'px'
            oDiv.style.backgroundPositionY = (imgNav.clientHeight / y) * -i + 'px'
            oDiv.style.transition = (Math.random() * 1 + 1) + 's'
            oPrantNode.appendChild(oDiv)
        }
    }
    var allDiv = oPrantNode.children
    setTimeout(() => {
        index++
        index == imgs.length && (index = 0)
        boom(l, t)
        for (var i = 0, length = allDiv.length; i < length; i++) {
            allDiv[i].style.transform = `perspective(1000px) rotateX(${Math.random() * 500 - 250}deg) translateX(${Math.random() * 500 - 250}px) translateY(${Math.random() * 500 - 250}px) translateZ(${Math.random() * 1000 - 500}px)`
            allDiv[i].style.opacity = 0
        }
    }, 3000)
    setTimeout(() => {
        oPrantNode.remove()
    }, 4500)
}
