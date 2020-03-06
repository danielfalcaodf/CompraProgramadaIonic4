export interface PagamentoStatus {
    idFatura: string,
    parcelaAtual: number,
    parcelaFinal: number,
    valorParcela: number,
    dataVecimento: string,
    atrasso: number,
    icon: string,
    btn: string,
    color: string
}
