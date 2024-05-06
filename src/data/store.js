import { reactive } from "vue";

export const store = reactive({
    start: false,
    correctPassword: false,
    texts: {
        initalMessage: {
            textOne: 'Che mal di testa... ',
            textTwo: 'Dove mi trovo?',
            textThree: 'Devo trovare un modo per uscire da qui',
            buttonText: 'Inizia',
        },
        windowPopUp:{
            textOne: 'Non riesco a vedere attraverso',
            textTwo: 'Chissà dove mi trovo',
            buttonText: 'Indietro',
        },
        chairPopUp:{
            textOne: 'Sembra comoda',
            textTwo: null,
            buttonText: 'Indietro',
        },
        holePopUp:{
            textOne: 'Un buco sul pavimento... ',
            textTwo: 'Devo fare attenzione a non caderci dentro',
            buttonText: 'Indietro',
        },
        paintingsPopUp:{
            textOne: 'Solo dei semplici quadri...',
            textTwo: null,
            buttonText: 'Indietro',
        },
        drawerPopUp:{
            textOne: 'Potrebbe esserci un oggetto utile',
            textTwo: null,
            buttonText: 'Prendi cacciavite',
        },
        radiatorPopUp:{
            textOne: 'Vedo qualcosa dietro il termosifone',
            textTwo: 'Devo trovare qualcosa per smontare il termosifone',
            buttonText: 'Indietro',
        },
        radiatorPopUpWhithScrewdriver:{
            textOne: 'Ho trovato una lettera',
            textTwo: null,
            buttonText: 'Prendi Lettera',
        },
        doorPopUp:{
            textOne: 'Sembra volerci un codice',
            textTwo: null,
            buttonText: 'Indietro',
        }
    }
        


})