import type { Bombero, Movil, Suministros, Item, Cliente } from "./data";
// Función para calcular el total de un suministro basado en los items
const calcularTotalSuministro = (items: Item[]): number => {
    return items.reduce((total, item) => total + item.movil.precio, 0);
};

// Función para obtener la fecha y hora actual
const obtenerFechaActual = (): Date => {
    return new Date();
};

// Función para obtener la fecha en 7 días
const obtenerFechaEn7Dias = (): Date => {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 7);
    return fecha;
};

// Función para obtener la fecha de realizado (puede ser igual o superior a pedido_para)
const obtenerFechaRealizado = (pedidoPara: Date): Date => {
    const fechaRealizado = new Date();
    fechaRealizado.setHours(fechaRealizado.getHours() + Math.floor(Math.random() * 24 * 7)); // Se establece una fecha aleatoria dentro de la semana
    return fechaRealizado > pedidoPara ? fechaRealizado : pedidoPara;
};

const cliente1: Cliente = {
    id: 1,
    nombre_completo: "Cliente 1",
    telefono: 123456789
};

const cliente2: Cliente = {
    id: 2,
    nombre_completo: "Cliente 2",
    telefono: 987654321
};

const cliente3: Cliente = {
    id: 3,
    nombre_completo: "Cliente 3",
    telefono: 555555555
};

const movil1: Movil = {
    id: 1,
    litros: 100,
    precio: 50.00
};

const movil2: Movil = {
    id: 2,
    litros: 150,
    precio: 75.00
};

const bombero1: Bombero = {
    legajo: 101,
    nombre_completo: "Bombero 1",
    jerarquia: "Alta",
    es_chofer: true,
    suministrosParticipados: [],
};

const bombero2: Bombero = {
    legajo: 102,
    nombre_completo: "Bombero 2",
    jerarquia: "Baja",
    es_chofer: false,
    suministrosParticipados: [],
};

// Crear mocks con fechas ajustadas
const suministro1: Suministros = {
    id: "001",
    recibo: 123,
    cliente: cliente1,
    items: [
        {
            movil: movil1,
            chofer: { bombero: bombero1, pagado: true },
            acompanante: { bombero: bombero2, pagado: true }
        }
    ],
    creado: obtenerFechaActual(),
    pedido_para: obtenerFechaEn7Dias(),
    rango_horario: "Mañana",
    realizado: obtenerFechaRealizado(obtenerFechaEn7Dias()),
    status: true,
    total: calcularTotalSuministro([{ movil: movil1, chofer: { bombero: bombero1, pagado: true }, acompanante: { bombero: bombero2, pagado: true } }])
};

const suministro2: Suministros = {
    id: "002",
    recibo: 124,
    cliente: cliente2,
    items: [
        {
            movil: movil1,
            chofer: { bombero: bombero1, pagado: true },
            acompanante: { bombero: bombero2, pagado: false }
        },
        {
            movil: movil2,
            chofer: { bombero: bombero2, pagado: false },
            acompanante: { bombero: bombero1, pagado: false }
        }
    ],
    creado: obtenerFechaActual(),
    pedido_para: obtenerFechaEn7Dias(),
    rango_horario: "Tarde",
    realizado: obtenerFechaRealizado(obtenerFechaEn7Dias()),
    status: true,
    total: calcularTotalSuministro([{ movil: movil1, chofer: { bombero: bombero1, pagado: true }, acompanante: { bombero: bombero2, pagado: false } }, { movil: movil2, chofer: { bombero: bombero2, pagado: false }, acompanante: { bombero: bombero1, pagado: false } }])
};

const suministro3: Suministros = {
    id: "003",
    recibo: 125,
    cliente: cliente3,
    items: [
        {
            movil: movil1,
            chofer: { bombero: bombero1, pagado: false },
            acompanante: { bombero: bombero2, pagado: true }
        }
    ],
    creado: obtenerFechaActual(),
    pedido_para: obtenerFechaEn7Dias(),
    rango_horario: "Noche",
    realizado: obtenerFechaRealizado(obtenerFechaEn7Dias()),
    status: false,
    total: calcularTotalSuministro([{ movil: movil1, chofer: { bombero: bombero1, pagado: false }, acompanante: { bombero: bombero2, pagado: true } }])
};

export const suministros: Suministros[] = [suministro1, suministro2, suministro3];
