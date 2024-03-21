import './Servicios.css'

export const Servicios = () => {
  return (
    <section className='servicios-container'>
        <h2>Servicios</h2>

        <article className='servicio-card'>

          <i className="fa-solid fa-scale-balanced fa-2xl"></i>
          <h3>Asesoramiento Legal</h3>
          <p>Estoy disponible para responder a tus consultas legales, revisar contratos y brindarte orientación en cualquier asunto legal que puedas enfrentar.</p>

        </article>

        <article className='servicio-card'>
          
          <i className="fa-solid fa-file-signature fa-2xl"></i>
          <h3>Elaboración y Revisión de Documentos</h3>
          <p>Puedo redactar y revisar contratos, acuerdos comerciales, políticas internas y otros documentos legales para garantizar su validez y cumplimiento normativo.</p>

        </article>

        <article className='servicio-card'>
          
          <i className='fa-solid fa-gavel fa-2xl'></i>
          <h3>Cumplimiento Normativo</h3>
          <p>Te ayudaré a mantener el cumplimiento de las leyes y regulaciones aplicables a tu industria, evitando posibles sanciones y riesgos legales.</p>

        </article>
        
    </section>
  )
}
