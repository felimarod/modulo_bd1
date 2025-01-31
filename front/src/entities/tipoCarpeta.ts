interface TipoCarpeta {
  idTipoCarpeta: string;
  descTipoCarpeta: string;
}

function crearTipoCarpeta(
  idTipoCarpeta: string,
  descTipoCarpeta: string
): TipoCarpeta {
  return {
    idTipoCarpeta,
    descTipoCarpeta,
  };
}

export { crearTipoCarpeta };
export type { TipoCarpeta };

