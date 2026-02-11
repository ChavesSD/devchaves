/**
 * Fundo com grid em perspectiva 3D (linhas que parecem ir ao horizonte).
 * Opcional: animação sutil de parallax.
 */
export default function PerspectiveGridBackground() {
  return (
    <div className="perspective-grid-bg" aria-hidden>
      <div className="perspective-grid-bg__plane" />
    </div>
  )
}
