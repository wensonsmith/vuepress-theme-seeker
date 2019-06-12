const gradients = [{
    name: 'Cool Blues',
    class: 'cool-blues'
}, {
    name: '月光行星',
    class: 'moonlit-asteroid'
},{
    name: '佩奇粉',
    class: 'piggy-pink'
},{
    name: '蓝莓',
    class: 'blue-raspberry'
},{
    name: 'Summer',
    class: 'summer'
},{
    name: 'Can u feel the love tonight',
    class: 'can-you-feel-the-love-tonight'
},{
    name: '五十度灰',
    class: 'fifty-shades-of-grey'
},{
    name: '原木',
    class: 'timber'
},{
    name: 'Atlas',
    class: 'atlas'
},{
    name: '云间',
    class: 'between-the-clouds'
}]


export default {
    random(){
        this.className = gradients[Math.floor(Math.random()*gradients.length)]
        return this.className
    },
    className: undefined
}