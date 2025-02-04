type MensajeDTO = {
  destinatariosCC: string[];
  destinatariosCCO: string[];
  asunto: string;
  cuerpoMensaje: string;
  archivos: { nombre: string; extension: string }[];
};

export type { MensajeDTO };
