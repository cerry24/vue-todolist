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
            ],
            newItem: ''
        }
    },

    methods: {
        removeItem(itemToDelete) {
            const itemIndex = this.todoList.indexOf(itemToDelete);

            this.todoList.splice(itemIndex, 1);
        },

        addItem(item) {
            this.todoList.push({text: item, done:false});
            this.clearInput();
        },

        clearInput() {
            this.newItem = '';
        },

        invertDone(doneElement) {
            doneElement.done = !doneElement.done;
        }
    }
}).mount('#app');