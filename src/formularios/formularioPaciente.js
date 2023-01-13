import{validadFormulario} from './validacionFormularioPaciente.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaBoton,etiquetaDocumento,etiquetaRegimen,etiquetaCorreo,etiquetaGrupoingreso,etiquetaTelefono,etiquetaCuotamoderadora){

    let nombresPaciente=etiquetaNombre.value
    let envioPaciente=etiquetaBoton.value
    let documentoPacientes=etiquetaDocumento.value
    let regimenPaciente=etiquetaRegimen.value
    let correoPaciente=etiquetaCorreo.value
    let grupoPaciente=etiquetaGrupoingreso.value
    let telefonoPaciente=etiquetaTelefono.value
    let cuotaPaciente=etiquetaCuotamoderadora.value
    

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
    let datosFormularioPacientes={
        nombre:nombresPaciente,
        documento:documentoPacientes,
        correo:correoPaciente,
        botonenvio:envioPaciente,
        regimen:regimenPaciente,
        grupo:grupoPaciente,
        telefono:telefonoPaciente,
        cuota:cuotaPaciente,
        
    }
    validadFormulario(datosFormularioPacientes)
    
}