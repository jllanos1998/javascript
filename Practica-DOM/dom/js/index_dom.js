import scrollTopButton from "./dom/btn_scroll.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock,alarma } from "./dom/reloj.js";
import {moveBall, shortcut } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock('#reloj',"#activar-reloj","#desactivar-reloj")
    alarma("assets/car-alarm.mp3","#activar-alarma","#desactivar-alarma")

    scrollTopButton(".scroll-top-btn")
    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        "Contenido Movil",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&t=8s&ab_channel=jonmirchajonmircha">Youtube</a>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
        
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        "Contenido Movil",
        `
        <a href="https://goo.gl/maps/8K4x1xebF9SstutY8">ver mapa</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.9006996659145!2d-70.68770928420676!3d-33.242904794277834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662b965ef9ecc85%3A0x92ef9112d71ba5c5!2sLo%20Arcaya%2C%20Chicureo%2C%20Colina%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1623720933185!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `
        );

    responsiveTester("responsive-tester");

})

d.addEventListener('keydown',(e)=>{
    shortcut(e);
    moveBall(e,'.ball','.stage')
})
darkTheme(".dark-theme-btn","dark-mode")