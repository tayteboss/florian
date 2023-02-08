const globalRemBasis = 16;

const pxToRem = (pxSize) => `${pxSize / globalRemBasis}rem`;

export default pxToRem;
