//Importaciones
import {capturarDatos} from '../formularios/formularioMedicos.js'



// etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistroMedico=document.getElementById("registromedico")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaSedes=document.getElementById("sedes")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFotografia=document.getElementById("fotografia")

//detectar el evento de clic
etiquetaBoton.addEventListener("click", function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroMedico,etiquetaCorreo,etiquetaSedes,etiquetaHorario,etiquetaDescripcion,etiquetaFotografia)
    
})
