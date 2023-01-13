export function validadFormulario(datos){

    //Referencias a etiquetas que quiero validad
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
 

//validemos 3 campos del formulario
//nombres - documento - registro del medico
let nombresMedico=datos.nombre
let documentoMedico=datos.documento


//Agregar todos los caminos posibles para validar
//el formulario
if(nombresMedico=="" && documentoMedico=="" && registroMedico==""){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'nombre y documento son obligatorios',
  
})
}else if(nombresMedico=="" && documentoMedico!=""){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
}else if(nombresMedico!="" && documentoMedico==""){
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
}else{
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
    alert("Enviando datos...")
}

}