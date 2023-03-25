const slider=document.querySelectorAll(".left");
const slider_right=document.querySelector(".right");
const appearoption = {
    threshold:0,
    rootMargin:"0px 0px 0px 0px"
};
const appearonscroll = new IntersectionObserver(
    function (entries, appearonscroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                entry.target.classList.add("appear");
                appearonscroll.unobserve(entry.target);
            }
        })
    }, appearoption
);

for(var i =0;i<7;i++){
    appearonscroll.observe(slider[i]);
}
appearonscroll.observe(slider_right);

function openvideo(n){
    const videotitle=document.querySelectorAll(".youtube-overlay");
    videotitle[n-1].classList.add("youtube-overlay-side");
    const video=document.querySelectorAll(".video");
    video[n-1].classList.remove("hidden");
}
function removevideo(n){
    const videotitle=document.querySelectorAll(".youtube-overlay");
    videotitle[n-1].classList.remove("youtube-overlay-side");
    const video=document.querySelectorAll(".video");
    video[n-1].classList.add("hidden");
}

/* const videotitles=document.querySelector(".div-contain");
if(videotitles){
    videotitles=``
    for(var i =0;i<videos.length;i++)
    videotitles+=`
    <div class="youtube-overlay">
    <div class="video hidden">
                <i class="fa-solid fa-xmark" onclick="removevideo(${videos[i].id});"></i>
                <iframe width="1420px" height="600px" src="${videos[i].video}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            </div>
    `
}  */

var changename=document.querySelector(".hcb_form_name");
if(changename){
    changename.setAttribute("value","Ajay")
}