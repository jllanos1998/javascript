const d = document,
    n = navigator;
export default function webCam(id){
    const $video = d.getElementById(id);
    
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:false,audio:false}).then(stream =>{
            console.log(stream)
            $video.srcObject = stream;
            $video.play();
        }).catch((err)=>{
            console.log(err)
            $video.insertAdjacentElement("beforebegin",`<p>${err}</p>`)
        })
    }
}