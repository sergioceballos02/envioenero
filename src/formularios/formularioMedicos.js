import{validadFormulario} from './validacionFormularioMedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroMedico,etiquetaCorreo,etiquetaSedes,etiquetaHorario,etiquetaDescripcion,etiquetaFotografia){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistroMedico.value
    let correMedico=etiquetaCorreo.value
    let descripccionMedico=etiquetaDescripcion.value
    let fotografiaMedico=etiquetaFotografia.value
    let sedesMedico=etiquetaSedes.value
    let horarioMedico=etiquetaHorario.value

    /* console.log(nombresMedico)
    console.log(documentoMedico)
    console.log(especialidadMedico)
    console.log(registroMedico)
    console.log(correMedico)
    console.log(descripccionMedico)
    console.log(fotografiaMedico)
    console.log(sedesMedico)
    console.log(horarioMedico) */

    //debemos almacenar todos los valores del formulario en una sola variable
    //Objeto= permite almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroMedico,
        correo:correMedico,
        sede:sedesMedico,
        horario:horarioMedico,
        descripcion:descripccionMedico,
        foto:fotografiaMedico
    }
    validadFormulario(datosFormularioMedico)
    
}