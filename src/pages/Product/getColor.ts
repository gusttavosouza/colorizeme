export function getColor(color: string) {
  switch(color){
    case 'bege':
      return {    
        analogas: ["#E39E49", "#E3C549", "#E3B249", "#E38349", "#E6DE7E"] as Array<String>,
        monocromatico: ["#B0955B", "#7D725A", "#E3B249", "#4A4741", "#332E23"]as Array<String>,
        sombras: ["#BF963D", "#967630", "#E3B249", "#6E5623", "#453616"]as Array<String>,
      }
    case 'black':
      return {    
        analogas: ["#3c3c3c", "#515151", "#000000", "#808080", "#222016"]as Array<String>,
        monocromatico: ["#331F1F", "#662929", "#000000", "#991F1F", "#CC0000"]as Array<String>,
        sombras: ["#A8A8A8", "#808080", "#000000", "#575757", "#333333"]as Array<String>,
      }
    default:
      return {    
        analogas: ["#E39E49", "#E3C549", "#E3B249", "#E38349", "#E6DE7E"]as Array<String>,
        monocromatico: ["#B0955B", "#7D725A", "#E3B249", "#4A4741", "#332E23"]as Array<String>,
        sombras: ["#BF963D", "#967630", "#E3B249", "#6E5623", "#453616"]as Array<String>,
      }
  }
}