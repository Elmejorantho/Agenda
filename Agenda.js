
const form = document.querySelector('#datos-container');
const inputName = document.querySelector('#nombre');
const inputNumero = document.querySelector('#numeroTelefono');
const inputDireccion = document.querySelector('#direccion');
const inputCorreo = document.querySelector('#correoElec');
const datosContacto = document.querySelector('#agenda-container');
const listaCont = document.querySelector('#lista');
const botonBorrar = document.querySelector('.delete-Button');
const validNumber = document.querySelector('#numeroTelefono');
const botonAgregar = document.querySelector('#btn-add-contact');
const regexPhone = /^([0-9]){3}-[0-9]{7}$/;
const titulo = document.querySelector('#agenda-title');

setInterval(() =>{
titulo.classList.toggle('gold')
}, 100);



const loadContacts = () => {
    listaCont.innerHTML =  localStorage.getItem('lista');
}

form.addEventListener('submit', e => {
    const nombre = inputName.value;
    const numero = inputNumero.value;
    const direccion = inputDireccion.value;
    const correo = inputCorreo.value;
    e.preventDefault();
    
    const contactItem = document.createElement('li')
    contactItem.innerHTML = `
    ${nombre} ${numero} ${direccion} ${correo}
    <button class="delete-Button">Eliminar</button>`;

    listaCont.appendChild(contactItem);
    inputName.value = ('')
    inputNumero.value = ('')
    inputDireccion.value = ('')
    inputCorreo.value = ('');
    alert(message = 'Has creado un contacto')
   
    window.localStorage.setItem('lista', listaCont.innerHTML);
    })

    

listaCont.addEventListener('click', e => {
    if (e.target.classList.contains('delete-Button')){
        e.target.parentElement.remove();
        localStorage.removeItem('lista', listaCont.innerHTML);
        alert(message = 'Has borrado un contacto')
    }

})

inputNumero.addEventListener('input', e => {
const validNumber = regexPhone.test(e.target.value);

if (validNumber) {
    botonAgregar.removeAttribute('disabled')
    inputNumero.classList.add('green')

} else {
     inputNumero.classList.add('red')
}

})





