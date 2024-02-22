export interface Cliente {
    id: number,
    nombre_completo: string,
    telefono: number
}

export interface Movil {
    id: number,
    litros: number,
    precio: number
}

export interface Item {
    movil: Movil,
    chofer: {
        bombero: Bombero,
        pagado: boolean
    },
    acompanante: {
        bombero: Bombero,
        pagado: boolean
    }
}

export interface Suministros {
    id: string,
    recibo: number,
    cliente: Cliente,
    items: Item[];
    creado: Date,
    pedido_para: Date,
    rango_horario: string,
    realizado: Date,
    status: boolean,
    total: number
}

export interface Bombero {
    legajo: number,
    nombre_completo: string,
    jerarquia: string,
    es_chofer: boolean,
    suministrosParticipados: Suministros[]
}
