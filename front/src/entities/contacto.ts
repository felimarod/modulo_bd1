type Contacto = {
  consecContacto: number;
  nombreContacto: string;
  correoContacto: string;
  usuario: string;
  usuario_1?: string;
}

function crearContacto(
  consecContacto: number,
  nombreContacto: string,
  correoContacto: string,
  usuario: string,
  usuario_1?: string
): Contacto {
  return {
    consecContacto,
    nombreContacto,
    correoContacto,
    usuario,
    usuario_1,
  };
}

export { crearContacto };
export type { Contacto };
