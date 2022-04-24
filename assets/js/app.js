/*  Rifare l'esercizio della to do list.
    Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    text, una stringa che indica il testo del todo
    done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/
/*  MILESTONE 1
    Stampare all 'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
 */
/*  MILESTONE 2
    Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
 */
/*  MILESTONE 3
    Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/
/*  Bonus:
   1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
   2 - cliccando sul testo dell 'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = new Vue({

    el: '#app',

    data: {

        newTask: "",

        tasks: [{
                text: "Learn VueJS",
                done: false,
            },
            {
                text: "Learn JS",
                done: true,
            },
            {
                text: "Learn CSS",
                done: true,
            },
            {
                text: "Learn HTML",
                done: true,
            },
        ],
    },

    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1)
        },

        addTask() {
            this.task = {
                text: this.newTask,
                done: false
            }

            this.tasks.unshift(this.task)

            this.newTask = ""

            if (this.task.text < 1) {
                this.removeTask()
            }
        },

        doneChange(i) {
            if (this.tasks[i].done === false) {
                this.tasks[i].done = true
            } else if (this.tasks[i].done === true) {
                this.tasks[i].done = false
            }
        },
    },

    mounted() {

    },

});

const app = new Vue({

    el: '#app',

    data: {

    },

    methods: {

    },

    mounted() {

    },

});