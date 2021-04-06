export const useParseToDisplayPrice = function (number: number): string {
  return number.toLocaleString('pt-BR', {
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
