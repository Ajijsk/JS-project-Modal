// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
if(modalBtn){
  modalBtn.addEventListener("click", function () {
    if(!modal.classList.contains("open-modal")){
        modal.classList.add("open-modal");
    }
  });
}
if(closeBtn) {
  closeBtn.addEventListener("click", function () {
    if(modal.classList.contains("open-modal")){
       modal.classList.remove("open-modal");
    }
  });
}