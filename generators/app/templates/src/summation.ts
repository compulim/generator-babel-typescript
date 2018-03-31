export default function (...v: number[]) {
  return v.reduce((sum, v) => sum + v, 0);
}
