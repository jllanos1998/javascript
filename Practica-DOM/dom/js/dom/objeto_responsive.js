const d = document;
const w = window;

export default function responsiveMedia(id,mq,movileContent,desktopContent){
    let breakpoint = window.matchMedia(mq);
    let responsive = (e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
           
            d.getElementById(id).innerHTML = movileContent;
        }
        console.log(e.matches)
    }
    breakpoint.addListener(responsive)
    responsive(breakpoint)
}