
//mio

let mostrarControls = document.getElementById('mostrarControls');
let controls1 = document.getElementById('controls');
let closeInst = document.getElementById('closeInst');

mostrarControls.addEventListener('click', function(){
    controls1.classList.add('show');
});
closeInst.addEventListener('click', function(){
    controls1.classList.remove('show');
});


let abrirCompartir = document.getElementById('abrirCompartir');
let compartir = document.getElementById('compartir');
let cerrarCompart = document.getElementById('cerrarCompart');

abrirCompartir.addEventListener('click', function(){
    compartir.classList.add('show1');
});
cerrarCompart.addEventListener('click', function(){
    compartir.classList.remove('show1');
});

let corazon = document.getElementById('corazon');

function like(){
    corazon.style.fill = 'red';
    corazon.style.stroke = 'red';
}
function disLike(){
    corazon.style.fill = 'none';
    corazon.style.stroke = 'white';
}
corazon.addEventListener('click', function(){
    if(corazon.style.fill === 'red'){
        disLike();
    }
    else{
        like();
    }
})
