const tooltipShare = document.getElementById('tooltipShare');
const shareButton = document.getElementsByClassName('shareButton');


//FUNCTION
const showShareLinks = () =>{

    if(tooltipShare.style.visibility = "hidden"){
        tooltipShare.style.visibility = "visible";
    }

    setTimeout(hideTooltip, 5000);
}

const hideTooltip = () =>{

    if(tooltipShare.style.visibility = "visible"){
        tooltipShare.style.visibility = "hidden";
    }
}

//Event listener
for(let i = 0; i<shareButton.length ; i++ ){
    shareButton[i].addEventListener('click', showShareLinks);
}

// for(let i = 0; 1<shareButton.length ; i++){
//     shareButton[i].addEventListener('mouseout')
// }

// tooltipShare.addEventListener('mouseout', hideTooltip);


