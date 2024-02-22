var buttons = document.querySelectorAll("button");
const mp3 =["/c.mp3","/d.mp3","/e.mp3","f.mp3","/g.mp3","/a.mp3","/b.mp3","/c'.mp3"];
var c =new Audio(mp3[2]);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        console.log(`button clicking ${(buttons[i].innerHTML)}`);
        c.play();
    });
}
