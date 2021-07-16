/* to hide js code */


const main = document.querySelector('main');
let html = '';
    for (let i =0; i < photosG.length; i ++) {
        let photoG = photosG[i];
        html += `
        <div>
            <h4>${photoG.name}</h4>
            <h5>${photoG.location}</h5>
            <img src="${photoG.photo}">
       </div>
        `;
           
    }

main.insertAdjacentHTML('beforeend' , html);  
document.getElementById('gsmP').style.backgroundColor = 'lightgreen'




