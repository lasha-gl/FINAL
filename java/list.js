'use strict';


let currentPage = 1;

function getUserInfo(page){
    fetch('https://reqres.in/api/users?page=' + page, {
     method: 'GET'
    })
    .then (function(response) {
        if(response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData) {

    responseData.data.forEach(element => {

        let li = document.createElement('li');
        li.classList.add('guide-list');

        let guideImgWrapper = document.createElement('div');
        guideImgWrapper.classList.add('guide-img_wrapper')

        let guideSpanWrapper = document.createElement('div');
        guideSpanWrapper.classList.add('guide-span_wrapper');

        let guideEmailWrapper = document.createElement('div');
        guideEmailWrapper.classList.add('guide-email_wrapper');

        let guideImg = document.createElement('img');
        guideImg.src = element.avatar;
        guideImg.classList.add('guide-img');
        
        let guideName = document.createElement('span');
        guideName.textContent = element.first_name;

        let guideLastname = document.createElement('span');
        guideLastname.textContent = element.last_name;

        let guideEmail = document.createElement('span');
        guideEmail.textContent = element.email;
        
        guideImgWrapper.appendChild(guideImg);
        guideSpanWrapper.appendChild(guideName);
        guideSpanWrapper.appendChild(guideLastname);
        guideEmailWrapper.appendChild(guideEmail)

        li.appendChild(guideImgWrapper);
        li.appendChild(guideSpanWrapper);
        li.appendChild(guideEmailWrapper);

        document.getElementById('guide-ul').appendChild(li);
    })

    })
    .catch(function(error) { 
        if(error == 404){
            let spanError = document.createElement('span');
            spanError.textContent = 'Page Not Found';
            document.getElementById('guide-wrapper').appendChild(spanError)
        } else {
        console.log('Server Error');
        }
    })
}

document.getElementById('loadMore').addEventListener('click', function() {
    currentPage += 1;

    getUserInfo(currentPage);
});

getUserInfo(currentPage);

let loadMore = document.getElementById('loadMore');
let currentUserBox = 1;

loadMore.addEventListener('click', function(){
    let userBox = document.querySelectorAll('.guide-list');
    currentUserBox += userBox.length;

    if(currentUserBox >= userBox.length){
        event.target.style.display = 'none';
    }
});