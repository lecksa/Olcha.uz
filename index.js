let body = document.body
let wrap = document.createElement('div')

for (let k = 0; k < 3; k++) {

    let java = document.createElement('div')
    let image = document.createElement('div')
    let img = document.createElement('img')
    let btns = document.createElement('div')
    let btn_1 = document.createElement('button')
    let img_1 = document.createElement('img')
    let btn_2 = document.createElement('button')
    let img_2 = document.createElement('img')
    let a = document.createElement('a')
    let text = document.createElement('div')
    let p = document.createElement('p')
    let pay = document.createElement('div')
    let shop = document.createElement('div')
    let lit = document.createElement('button')
    let img_3 = document.createElement('img')
    let big = document.createElement('button')

    wrap.classList.add('wrap')
    java.classList.add('java')
    image.classList.add('image')
    img.src = "./Cjg3V5nm4mBivJC9davhVhYWJBhcreltBb7OOuLX8ol5KM5TsUNUUEA6j9sK.jpg"
    btns.classList.add('btns')
    img_1.src = "./3643770_favorite_heart_like_likes_love_icon.png"
    img_2.src = "./9035174_stats_chart_icon.png"
    a.innerHTML = 'Apple iPhone 15 Pro'
    a.href = '#'
    text.classList.add('text')
    p.innerHTML = '14 940 000 сум'
    pay.classList.add('pay')
    pay.innerHTML = '1 932 000 сум x 12 мес'
    shop.classList.add('shop')
    lit.classList.add('lit')
    img_3.src = './2205959_cart_bag_internet_shopping_buy_icon.png'
    big.classList.add('big')
    big.innerHTML = 'В рассрочку'

    body.append(wrap)
    wrap.append(java)
    java.append(image, a, text, shop)
    image.append(img, btns)
    btns.append(btn_1, btn_2)
    btn_1.append(img_1)
    btn_2.append(img_2)
    text.append(p, pay)
    shop.append(lit, big)
    lit.append(img_3)
}