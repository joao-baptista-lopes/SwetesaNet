interface Status {
    status: string;
    color: string;
  }
  
  export interface ResponseContent<T> {
    // data: import("c:/Users/joao.lopes/Desktop/PORTAL MINFIN/PORTAL_INSTITUCIONAL_MINFIN/src/app/shared/models/Content").Content<import("c:/Users/joao.lopes/Desktop/PORTAL MINFIN/PORTAL_INSTITUCIONAL_MINFIN/src/app/shared/models/Documentos.model").DocumentoPIB>[];
    total: number;
    items: T;
    statuses: Status[];
    _links: { self: { href: string; method: string } };
  }
  