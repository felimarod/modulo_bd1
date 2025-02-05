type MensajeDTO = {
  remitente?: string;
  correoRemitente?: string;
  destinatariosCC: string[];
  destinatariosCCO: string[];
  asunto: string;
  cuerpoMensaje: string;
  archivos: string;
  idTipoCarpeta?: string;
  usuario?: string;
};

export type { MensajeDTO };
