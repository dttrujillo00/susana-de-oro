import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text-container">
        <div className="typed-out">
          <h2>Asesoría Legal</h2>
        </div>
        <div className="typed-out delayed">
          <p>Protegiendo el presente</p>
        </div>
        <div className="typed-out delayed2">
          <p>y asegurando el futuro</p>
        </div>
      </div>

      <i className="fa-solid fa-chevron-down fa-2xl arrow-down"></i>

    </div>
  )
}
