export function tempoParaSegundos(tempo: string) {
  const [hrs = "0", min = "0", seg = "0"] = tempo.split(":");

  return Number(hrs) * 3600 + Number(min) * 60 + Number(seg);
}
