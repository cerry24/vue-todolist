const { createApp } = Vue;

createApp ({
    data() {
        return{
            todoList: [
                {
                    text: 'stendere i panni',
                    done: false,
                },
                {
                    text: 'lavare i patti',
                    done: true,
                },
                {
                    text: 'fare la spesa',
                    done: false,
                },
                {
                    text: 'lavare la macchina',
                    done: false,
                },
                {
                    text: 'pagare rata corso boolean',
                    done: true,
                },
                {
                    text: 'chiamare meccanico',
                    done: true,
                }
            ]
        }
    }
}).mount('#app');