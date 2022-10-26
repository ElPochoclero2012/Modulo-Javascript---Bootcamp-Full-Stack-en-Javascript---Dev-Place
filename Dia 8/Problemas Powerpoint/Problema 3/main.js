class Tareas{
    id;
    titulo;
    completada;
    fechaCreada;

    constructor(id,titulo,completada,fechaCreada){
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
        this.fechaCreada = fechaCreada;
    }

    tarea(id){
        return "id: ", this.id, "\ntitulo: ", this.titulo, "\ncompletada: ", this.completada, "\nfechaCreada: ", this.fechaCreada;
    }
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
 
let tareasLiteral = {
    id: 1,
    titulo: "lavar los platos",
    completada: true,
    fecha: "20/03/2020"
}