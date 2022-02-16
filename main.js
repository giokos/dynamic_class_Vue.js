Vue.createApp({
    data(){
        return{
            setColor : true,
            color : "",
            users : [
            {
                name:"Ognjen",
                selected : false
            },
            {
                name:"Marko",
                selected : false
            },
            {
                name:"Jovan",
                selected : false
            }
            ]
        }
    },
    methods : {
        changeColor(){
            this.setColor = !this.setColor;
        },
        setSelected(user){
            user.selected = !user.selected
        }
    }
}).mount('#main')

