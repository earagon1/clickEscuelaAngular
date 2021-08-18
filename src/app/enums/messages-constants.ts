export const MESSAGES = {
STUDENT:
{
GET: {
    SUCCES: 'Se cargo la lista de alumnos correctamente',
    ERROR: 'Se produjo un error al intentar obtener los alumnos',
    NORMAL: 'Recarga exitosa. No se encontraron nuevas entradas'
},
POST: {
    SUCCES: 'Se agrego el alumno correctamente.',
    ERROR: {
        400: 'El alumno ya existe en la base de datos'
    },
    NORMAL: 'Sin cambios en el agregado de alumnos'
},
PUT: {
    SUCCES: 'Se edito correctamente el alumno',
    ERROR: 'Se produjo un error al editar el alumno',
    NORMAL: 'No hubo cambios en el editado del alumno'
},
CANCEL: {
    USER: 'Evento Cancelado por el usuario'
}
},

PARENT:
{
    SUCCES: 'Se agrego un familiar',
    ERROR: 'No se pueden agregar mas familiares',
    NORMAL: 'Se quito el familiar adicional'
},
CLEAR_FORMS: 'Se limpiaron los formularios',
ASISTANCE_LIST: {
    NO_FOUND: 'No se encontraron entradas para la fecha seleccionada',
    FOUND: 'Se encontraron los siguientes resultados para la fecha seleccionada',
    NO_SELECTED: 'No selecciono una fecha'
},

GRADES: {
    GET: {
        SUCCES: 'Se cargo la lista de notas correctamente',
        ERROR: 'Se produjo un error al intentar obtener las notas de los cursos asignados',
        NORMAL: 'Recarga exitosa.'
    },
    POST: {
        SUCCES: 'Se agrego la nota correctamente.',
        ERROR: {
            400: 'No existe el alumno al cual desea ingresar la nota'
        },
        NORMAL: 'Sin cambios en el agregado de notas'
    },
    PUT: {
        SUCCES: 'Se edito correctamente la nota',
        ERROR: 'Se produjo un error al editar la nota',
        NORMAL: 'No hubo cambios en el editado de la nota'
    }
},
ACTIVITY: {
    GET: {
        SUCCES: 'Se cargo la lista de Tareas correctamente',
        ERROR: 'Se produjo un error al intentar obtener las tareas de los cursos asignados',
        NORMAL: 'Recarga exitosa.'
    },
    POST: {
        SUCCES: 'Se agrego la tarea correctamente.',
        ERROR: {
            400: 'No se pudo agregar la tarea. Revise la informacion cargada'
        },
        NORMAL: 'Sin cambios en el agregado de tareas'
    },
    PUT: {
        SUCCES: 'Se edito correctamente la tarea',
        ERROR: 'Se produjo un error al editar la tarea',
        NORMAL: 'No hubo cambios en el editado de la tarea'
    }
},
TEACHER: {
    GET: {
        SUCCES: 'Se cargo la lista de Docentes correctamente',
        ERROR: 'Se produjo un error al intentar obtener la lista de docentes',
        NORMAL: 'Recarga exitosa.'
    },
    POST: {
        SUCCES: 'Se agrego el Docente correctamente.',
        ERROR: {
            400: 'No se pudo agregar el Docente. Revise la informacion cargada'
        },
        NORMAL: 'Sin cambios en el agregado de Docente'
    },
    PUT: {
        SUCCES: 'Se edito correctamente el Docente',
        ERROR: 'Se produjo un error al editar al Docente',
        NORMAL: 'No hubo cambios en el editado del Docente'
    }
}


};
