<script>
import { store } from "../data/store";
import Inventory from "./partials/Inventory.vue"
import PopUp from "./partials/PopUp.vue";
import Keypad from "./partials/Keypad.vue";
import GetItems from "./partials/GetItems.vue";
  export default {
  name: 'SceneryOne',
  components: {
    Inventory,
    GetItems,
    PopUp,
    Keypad,
  },
    data() {
      return {
        store,
        initMessage: true,

        drawerPopUp:false,
        screwdriver: false,
        screwdriverClicked: false,

        paintingsPopUp: false,
        holePopUp: false,
        windowPopUp: false,
        chairPopUp: false,
        
        radiatorPopUp:false,
        radiatorPopUpWhithScrewdriver:false,
        letter: false,
        letterClicked:false,
        
        doorPopUp:false,
        doorPopUpWhithLetter: false,
        password: [8, 3, 2, 9, 7],
        nameObj: ["il cacciavite", "la lettera"],

        inventaryOne: false,
        inventaryTwo: false,
      }
    },
  computed: {},
    mounted() {console.log(store.texts.windowPopUp)},
  methods: {
    // Funzione inerente ai quadri
    getPaintingsPopUp() {
      if (!this.doorPopUpWhithLetter && !this.doorPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.letterClicked && !this.windowPopUp && !this.chairPopUp && !this.holePopUp && !this.drawerPopUp && !this.screwdriverClicked && !this.initMessage) {
        this.paintingsPopUp = true;
      }
    },

    // Funzione inerente al buco sul pavimento
    getHolePopUp() { 
      if (!this.doorPopUpWhithLetter && !this.doorPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.letterClicked && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.drawerPopUp && !this.screwdriverClicked && !this.initMessage) {
        this.holePopUp = true;
      }
    },

    // Funzione inerente alla finestra
    getWindowPopUp() { 
      if (!this.doorPopUpWhithLetter && !this.doorPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.letterClicked && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.drawerPopUp && !this.screwdriverClicked && !this.initMessage) {
        this.windowPopUp = true;
      }
    },

    // Funzione inerente alla sedia
    getChairPopUp() { 
      if (!this.doorPopUpWhithLetter && !this.doorPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.letterClicked && !this.windowPopUp && !this.paintingsPopUp && !this.holePopUp && !this.drawerPopUp && !this.screwdriverClicked && !this.initMessage) {
        this.chairPopUp = true;
      }
    },

    // Funzioni inerenti al casetto
    getDrawerPopUp() {
      if (!this.doorPopUpWhithLetter && !this.doorPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.letterClicked && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.screwdriverClicked && !this.initMessage) {
        this.drawerPopUp = true;
      }
    },
    getScrewdriver() {
      this.drawerPopUp = false;
      this.screwdriver = true;
      this.inventaryOne = true;

    },
    getScrewdriverClicked() {
      if (this.screwdriver) {
        this.inventaryOne = !this.inventaryOne;
        this.screwdriverClicked = !this.screwdriverClicked;
      }
      if (this.letterClicked) {
        this.letterClicked = false;
        this.inventaryTwo = true;
      }
    },

    // Funzioni inerenti al termosifone
    getRadiatorPopUp() {
      if (this.screwdriverClicked && !this.doorPopUpWhithLetter && !this.letterPopUp && !this.drawerPopUp && !this.letterClicked && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.radiatorPopUp && !this.doorPopUp && !this.letter) {
        this.radiatorPopUpWhithScrewdriver = true;
      }else if (!this.screwdriverClicked && !this.doorPopUp && !this.drawerPopUp && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.radiatorPopUpWhithScrewdriver && !this.initMessage){
        this.radiatorPopUp = true;
      }
    },
    getLetter() {
      this.radiatorPopUpWhithScrewdriver = false;
      this.letter = true;
      this.inventaryTwo = true;
    },
    getLetterClicked() {
      if (this.letter && !this.drawerPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp) {
        this.inventaryTwo = !this.inventaryTwo;
        this.letterClicked = !this.letterClicked;
      }
      if (this.screwdriverClicked) {
        this.screwdriverClicked = false;
        this.inventaryOne = true;
      }
      if (this.doorPopUpWhithLetter) {
        this.doorPopUpWhithLetter = false;
        this.doorPopUp = false;
      }
    },

    // Funzioni inerenti alla porta
    getDoorPopUp() {
      if (this.letter && !this.drawerPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.screwdriverClicked) {
        this.doorPopUpWhithLetter=true;
      } else if(!this.letter && !this.drawerPopUp && !this.radiatorPopUpWhithScrewdriver && !this.radiatorPopUp && !this.windowPopUp && !this.paintingsPopUp && !this.chairPopUp && !this.holePopUp && !this.screwdriverClicked && !this.initMessage) {
        this.doorPopUp = true;
      }
      if (this.letterClicked) {
        this.doorPopUpWhithLetter = true;
        this.letterClicked = false;
        this.inventaryTwo=true;
      }

    },

    // Funzione per tornare indietro
    getBeck() {
      if (this.radiatorPopUp) {
        this.radiatorPopUp = false;
      }
      if (this.doorPopUp) {
        this.doorPopUp = false;
      }
      if (this.drawerPopUp) {
        this.drawerPopUp = false;
      }
      if (this.doorPopUpWhithLetter) {
        this.doorPopUpWhithLetter = false;
      }
      if (this.letterClicked) {
        this.getLetterClicked();
      }
      if (this.paintingsPopUp) {
        this.paintingsPopUp = false;
      }
      if (this.holePopUp) {
        this.holePopUp = false;
      }
      if (this.windowPopUp) {
        this.windowPopUp = false;
      }
      if (this.chairPopUp) {
        this.chairPopUp = false;
      }
      if (this.initMessage) {
        this.initMessage = false;
      }
    }
  }
  }
</script>
<template>
    <div class="input position-relative">

      <!-- Elememti cliccabili nel gioco -->
      <div id="drawer" @click="this.getDrawerPopUp"></div>
      <div id="radiator" @click="this.getRadiatorPopUp"></div>
      <div id="door" @click="this.getDoorPopUp"></div>
      <div id="paintings" @click="this.getPaintingsPopUp"></div>
      <div id="hole" @click="this.getHolePopUp"></div>
      <div id="window" @click="this.getWindowPopUp"></div>
      <div id="chair" @click="this.getChairPopUp"></div>

      <!-- Inventario di gioco -->
      <div class="container-inventory d-flex justify-content-center align-items-end">
        <Inventory
        :screwdriverFunction="this.getScrewdriverClicked"
        :letterFunction="this.getLetterClicked"
        itemOne="Cacciavite"
        itemTwo="Lettera"
        :inventaryOne="this.inventaryOne"
        :inventaryTwo="this.inventaryTwo"
        :screwdriverClicked="this.screwdriverClicked"
        :letterClicked="this.letterClicked"
        />
      </div>

      <!-- PopUp di gioco con all'interno i vari messaggi  -->
      <div class="pop-up">

        <div v-if="initMessage" class="pop-up-content">
          <!-- Messaggio iniziale -->
          <PopUp 
          :textOne="store.texts.initalMessage.textOne" 
          :textTwo="store.texts.initalMessage.textTwo" 
          :textThree="store.texts.initalMessage.textThree" 
          :button="this.getBeck" 
          :buttonText="store.texts.initalMessage.buttonText"
          />
        </div>

        <div v-if="windowPopUp" class="pop-up-content">
          <!-- Se il giocatore clicca la finestra -->
          <PopUp 
          :textOne="store.texts.windowPopUp.textOne" 
          :textTwo="store.texts.windowPopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.windowPopUp.buttonText"
          />
        </div>

        <div v-if="chairPopUp" class="pop-up-content">
          <!-- Se il giocartore clicca la sedia -->
          <PopUp 
          :textOne="store.texts.chairPopUp.textOne" 
          :textTwo="store.texts.chairPopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.chairPopUp.buttonText"
          />
        </div>

        <div v-if="holePopUp" class="pop-up-content">
          <!-- Se il giocatore clicca il buco sul pavimento -->
          <PopUp 
          :textOne="store.texts.holePopUp.textOne" 
          :textTwo="store.texts.holePopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.holePopUp.buttonText"
          />
        </div>

        <div v-if="paintingsPopUp" class="pop-up-content">
          <!-- Se il giocatore clicca i quadri spunterà il pop-up -->
          <PopUp 
          :textOne="store.texts.paintingsPopUp.textOne" 
          :textTwo="store.texts.paintingsPopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.paintingsPopUp.buttonText"
          />
        </div>

        <div v-if="drawerPopUp" class="pop-up-content">
          <!-- Se il giocatore clicca il cassetto -->
          <PopUp v-if="!screwdriver" 
          :textOne="store.texts.drawerPopUp.textOne" 
          :textTwo="store.texts.drawerPopUp.textTwo" 
          :button="this.getScrewdriver" 
          :buttonText="store.texts.drawerPopUp.buttonText"
          />
          <div v-else class="text">
            <GetItems :nameObj="nameObj[0]" :button="this.getBeck"/>
          </div>
        </div>

        <div v-if="radiatorPopUp" class="pop-up-content">
          <!-- Se il giocatore clicca il termosifone senza aver preso il cacciavite -->
          <PopUp v-if="!this.letter" 
          :textOne="store.texts.radiatorPopUp.textOne" 
          :textTwo="store.texts.radiatorPopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.radiatorPopUp.buttonText"
          />
          <div v-if="this.letter" class="text">
            <GetItems :nameObj="nameObj[1]" :button="this.getBeck"/>
          </div>
        </div>

        <div v-if="radiatorPopUpWhithScrewdriver" class="pop-up-content">
          <!-- Se il giocatore clicca il termosifone con il cacciavite -->
          <PopUp 
          :textOne="store.texts.radiatorPopUpWhithScrewdriver.textOne" 
          :textTwo="store.texts.radiatorPopUpWhithScrewdriver.textTwo" 
          :button="this.getLetter" 
          :buttonText="store.texts.radiatorPopUpWhithScrewdriver.buttonText"
          />
        </div>

        <div v-if="doorPopUp" class="pop-up-content">
          <!-- Se il giocatore clicca la porta senza aver preso la lettera -->
          <PopUp 
          :textOne="store.texts.doorPopUp.textOne" 
          :textTwo="store.texts.doorPopUp.textTwo" 
          :button="this.getBeck" 
          :buttonText="store.texts.doorPopUp.buttonText"
          />
        </div>

      </div>

      <!-- La lettera contiene il codice -->
      <div v-if="letterClicked" class="letter">
        <div class="text-end mb-2">
          <button @click="this.getBeck">X</button>
        </div>
        <p>
          Nel cuore della notte, sotto un cielo stellato,<br>
          Un solo pensiero mi attraversa la mente.<br>
          Mentre il mondo dorme, io rimango sveglio,<br>
          Sembra un duello con me stesso, solo io e i miei pensieri.<br>
          Nonostante le stelle brillanti non riesco a trovare pace,<br> 
          In un mare di sogni, navigo lontano.<br>
          La luna, risplende radiante,<br>
          Nel silenzio, cerco di ascoltare il suo dolce canto.<br>
          La settimana prossima proverò a esser..
        </p>
      </div>

      <div v-if="this.doorPopUpWhithLetter" class="pop-up">
        <!-- Tastierno numerico per inserire il codice, apparirà solo se il giocatore avrà preso la lettera  -->
        <keypad 
        :buttonBeck="this.getBeck" 
        :password="this.password" 
        />
      </div>
    </div>
</template>

<style>
.input, .container-inventory{
  width: 100%;
  height: 100%;
}
#drawer{
  width: 80px;
  height: 130px;
  position: absolute;
  bottom: 100px;
}
#radiator{
  width: 150px;
  height: 120px;
  position: absolute;
  left:170px;
  bottom:150px;
  /* transform: skewX(20deg); */
}
#door{
  width: 150px;
  height: 500px;
  position: absolute;
  right: 0;
  top: 110px;
}
#paintings{
  width: 250px;
  height: 200px;
  position: absolute;
  left: 60%;
  transform: translateX(-60%);
  top: 120px;
}
#hole{
  width: 150px;
  height: 80px;
  position: absolute;
  right: 200px;
  bottom: 0;
}
#window{
  width: 150px;
  height: 360px;
  position: absolute;
  left: 150px;
  top: 40px;
}
#chair{
  width: 130px;
  height: 210px;
  position: absolute;
  left: 61%;
  transform: translateX(-61%);
  bottom: 100px;
}
.inventory{
  width: 70px;
  height: 70px;
  border: 2px solid rgb(123, 123, 123);
  background-color: rgba(0, 0, 0, 0.509);
  margin-bottom: 10px;
  line-height: 70px;
  text-align: center;
}
#drawer, #radiator, #window, #chair,  #door, #paintings, #hole, .inventory, .square{
  cursor: pointer;
}
.text, .letter,.correct, .keypad{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}
.text{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
.clicked{
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
}
.letter{
  background-color: #ffffff;
  padding: 50px 100px;
}
.letter p{
  color: black;
}
.square{
  text-align: center;
  font-size: 20px;
  padding: 20px;
}

</style>