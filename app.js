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
                { title: 'name of the kind', author: 'jayant surana', img: 'assets1/1.jpg', isFav: true },
                { title: 'way of the kind', author: 'jayant surana', img: 'assets1/2.jpg', isFav: true },
                { title: 'lane of the kind', author: 'jayant surana', img: 'assets1/3.jpg', isFav: false },
            ],
            url: 'https://github.com/jayant96',
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleisFav(book) {
            book.isFav = !book.isFav
            console.log('Event triggered')
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
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')