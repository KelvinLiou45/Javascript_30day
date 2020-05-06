function removeTransition(e) {
    // console.log(e.target);
    e.target.classList.remove("active");
}
function playSound(e) {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!key) return; //如果沒找到對應元素 則返回

    key.classList.add("active");
    audio.currentTime = 0;
    audio.play();
}
function playSound2(e){
    let keyCode = e.toElement.dataset.key;
    let key = document.querySelector(`div[data-key="${keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    key.classList.add("active");
    audio.currentTime = 0;
    audio.play();
}

let key = document.getElementsByClassName("key");
for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", playSound2);
    key[i].addEventListener("transitionend", removeTransition);
}
window.addEventListener("keydown", playSound);