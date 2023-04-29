// lo hare como objeto por ejemplo, pero mejor es consistencia 

const Tarea = {
    buscar: (filtros) => {
        const tareas = [
            { titulo: 'Tarea 1', status: 'nueva' },
            { titulo: 'Tarea 2', status: 'nueva' },
            { titulo: 'Tarea 3', status: 'en progreso' },
            { titulo: 'Tarea 4', status: 'en progreso' },
            { titulo: 'Tarea 5', status: 'terminada' },
            { titulo: 'Tarea 6', status: 'terminada' },
            { titulo: 'Tarea 7', status: 'nueva' },
        ]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tareas);
            }, 1000);
        })
    }
}


module.exports = Tarea;