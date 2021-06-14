import scrollTopButton from "./dom/btn_scroll.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarma } from "./dom/reloj.js";
import {moveBall, shortcut } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock('#reloj',"#activar-reloj","#desactivar-reloj")
    alarma("assets/car-alarm.mp3","#activar-alarma","#desactivar-alarma")

    scrollTopButton(".scroll-top-btn")
})

d.addEventListener('keydown',(e)=>{
    shortcut(e);
    moveBall(e,'.ball','.stage')
})
darkTheme(".dark-theme-btn","dark-mode")