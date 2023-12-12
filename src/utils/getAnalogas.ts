import * as chroma from 'chroma-js';

function generateAnalogousColors(baseColor: string): string[] {
  const numColors = 5;
  const baseChromaColor = chroma(baseColor);

  // Gera cores análogas
  const analogousColors = chroma
    .scale([baseChromaColor.hex(), baseChromaColor.darken(), baseChromaColor.brighten()])
    .mode('lab')
    .colors(numColors);

  return analogousColors;
}