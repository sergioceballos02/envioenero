//Importaciones
import {capturarDatos} from '../formularios/formularioPaciente.js'



// etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaGrupoingreso=document.getElementById("grupoingreso")
let etiquetaTelefono=document.getElementById("telefono")
let etiquetaCuotamoderadora=document.getElementById("cuota")


//detectar el evento de clic
etiquetaBoton.addEventListener("click", function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaBoton,etiquetaDocumento,etiquetaRegimen,etiquetaCorreo,etiquetaGrupoingreso,etiquetaTelefono,etiquetaCuotamoderadora)
    
})