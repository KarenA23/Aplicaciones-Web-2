// Generated by https://quicktype.io

export interface IResTutoria {
    sum:     number;
    tutorias: Tutoria[];
}

export interface Tutoria {
    _id?:    string;
    asignatura:string;
    status?: boolean;
    idtutorado:string;
    idtutor:string;
    ndehoras: number;
    fecha:string;
    hora:string;
    category?:  number;
    __v?:    number;
}
