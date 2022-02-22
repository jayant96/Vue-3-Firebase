const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Way of Kings',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the kind', author: 'jayant surana', img: 'assets/1.jpg' },
                { title: 'way of the kind', author: 'jayant surana', img: 'assets/2.jpg' },
                { title: 'lane of the kind', author: 'jayant surana', img: 'assets/3.jpg' },
            ],
            url: 'https://github.com/jayant96',
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e.type, e)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')