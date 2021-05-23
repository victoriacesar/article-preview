const shareBtn = document.querySelector('.info_button');
const btnImg = document.querySelector('.btnImg');
const shareBar = document.querySelector('.share');

function changeBtnImg(button, imgSrc, thisClass){
  if(button.classList.contains(thisClass)){
    btnImg.src = imgSrc
  } else if(!button.classList.contains(thisClass)){
    btnImg.src = 'images/icon-share.svg'
  }
}

const showShareBarMobile = () => {
    shareBtn.classList.toggle('active')
    shareBar.classList.toggle('active')
    changeBtnImg(shareBtn, 'images/icon-share-active.svg', 'active')
}

const showShareBarDesktop = () => {
  if(shareBar.classList.contains('active')){
    shareBar.classList.remove('active');
  }
  shareBtn.classList.toggle('active-desktop')
  shareBar.classList.toggle('active-desktop')
  changeBtnImg(shareBtn, 'images/icon-share-active.svg', 'active-desktop')
}

shareBtn.addEventListener('click', () => {
  let windowWidth = window.innerWidth;
  windowWidth < 1440 ? showShareBarMobile() : showShareBarDesktop();
});