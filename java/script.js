// video
var video = document.getElementById("Video");
var btn = document.getElementById("Btn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// end video


// burger




// end burger



// slider

let data = [
  {
     id:  1,
     imageUrl: 'https://cdn.motor1.com/images/mgl/MNBXn/s1/2022-ford-mustang-shelby-gt500-heritage-edition-with-original-close-crop.jpg',
     title: 'EXTERIOR',
     url: 'https://google.com'
  },
  {
      id:  2,
      imageUrl: 'https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp',
      title: 'EXTERIOR',
      url: 'https://google.com'
  },
  {
      id:  3,
      imageUrl: 'https://i.pinimg.com/originals/ca/00/b4/ca00b4ce9b68b122069de9a736adab31.jpg',
      title: 'INTERIOR',
      url: 'https://google.com'
  },
  {
      id:  4,
      imageUrl: 'https://images.hdqwalls.com/download/2018-ford-mustang-interior-wide-1366x768.jpg',
      title: 'INTERIOR',
      url: 'https://google.com'
  }

]

let arrowLeft = document.getElementById('arrow-left');
let sliderContent = document.getElementById('slider-content');
let arrowRight = document.getElementById('arrow-right');
let sliderIndex = 0;
let dotsList = document.getElementsByClassName('dot');


function createAtag(item) {
  let tag = document.createElement('a');
  tag.setAttribute('href', item.url);
  tag.setAttribute('class', 'slide');

  return tag;
}

function createH2tag(item) {
  let tagTitle = document.createElement('h2');
  tagTitle.setAttribute('class', 'title');
  tagTitle.append(item.title);

  return tagTitle;
}

function createImgtag(item) {
  let tagImage = document.createElement('img');
  tagImage.setAttribute('src', item.imageUrl);
  tagImage.setAttribute('alt', item.title);
  tagImage.setAttribute('class', 'image-wrapper');

  return tagImage;
}

function createDots(item) {
  let dots = document.createElement('div');
  dots.setAttribute('class', 'dots');

  data.forEach( (element) => {
      let dot = document.createElement('div');
      dot.setAttribute('class', 'dot');
      dot.setAttribute('data-id', element.id - 1);

      dot.onclick = function(event) {
          console.log(event.target);
          let id = event.target.getAttribute('data-id');
          sliderIndex = id;
          setSlide();
      }

      dots.appendChild(dot);
  });


  console.log(dots);
  return dots;
}

function setSlide() {
  sliderContent.innerHTML = ' ';
  let slideItem = createAtag(data[sliderIndex]);
  let h2Tag = createH2tag(data[sliderIndex]);
  let imgTag = createImgtag(data[sliderIndex]);
  let dots = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(h2Tag);

  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dots);
  currentDotActive();
}

function currentDotActive() {
  dotsList[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
  if (sliderIndex <= 0) {
      sliderIndex = data.length - 1;
      setSlide();
      return;
  }
  sliderIndex--;
  setSlide();
}

function arrowRightClick() {
  if (sliderIndex >= data.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
  }
  sliderIndex++;
  setSlide();
}

arrowLeft.addEventListener('click',arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);



setSlide();




// end slider



// from server
















































