const vlakken = document.querySelectorAll('.vlak');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';


function maakRipple(e){
    console.log(e);
    let x = e.pageX - this.offsetLeft;
    let y = e.pagey - this.offsetTop;
    rimpel.style.left = x + 'px';
    rimpel.style.top = y + 'px';
    e.target.append(rimpel);
}

for(let i=0; i<vlakken.length; i++){
    vlakken[i].addEventListener('click', maakRipple);
}