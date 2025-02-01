type Usuario = {
  usuario_: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  fechaCreacion: Date;
  correoAlterno: string;
  celular: string;
  idEstado: string;
  idPais: string;
};

function crearUsuario(
  usuario_: string,
  nombre: string,
  apellido: string,
  fechaNacimiento: string,
  fechaCreacion: string,
  correoAlterno: string,
  celular: string,
  idEstado: string,
  idPais: string
): Usuario {
  return {
    usuario_,
    nombre,
    apellido,
    fechaNacimiento: new Date(fechaNacimiento),
    fechaCreacion: new Date(fechaCreacion),
    correoAlterno,
    celular,
    idEstado,
    idPais,
  };
}

export { crearUsuario };
export type { Usuario };
