function generateImage(e) {

    this.createBox();
    
}

function createBox(){
    const box = document.createElement('div');
    box.style.width = '250px';
    box.style.height = '250px';
    box.style.border = "1px solid black";
    box.style.margin = "25px";
    document.body.appendChild(box);

    this.insertImage(box);
}


function insertImage(box){
    const img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg";
    img.style.width = "100%";
    img.style.height = "100%";
    box.appendChild(img);
}

const killImage = (e) => {
    const img = document.querySelector('img');
    img.parentNode.removeChild(img);
};

const resize = (e) => {
    const box = document.querySelector('div');
    let width = box.style.width;
    let height = box.style.height;
    width = width.replace("px", '');
    width = parseInt(width);

    height = height.replace("px", '');
    height = parseInt(height);
    console.log('width ' , width, 'height ', height);

    box.style.width = width + 50  + 'px';
    box.style.height = height + 50 + 'px';
    document.body.appendChild(box);

    console.log('clicked!')
};