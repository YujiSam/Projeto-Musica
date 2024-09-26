import { MusicasStyle } from "../css/MusicasStyle"

function Musicas() {

    return (
      <>
      <MusicasStyle>
      <header className="main-container">
        <section className="musicas-populares">
          <h2>Músicas Populares para Tocar</h2>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=5IXPnPnoYns" target="_blank" rel="noopener noreferrer">"Eu, Você, o Mar e Ela" - Luan Santana</a></li>
            <li><a href="https://www.youtube.com/watch?v=kJQP7kiw5Fk" target="_blank" rel="noopener noreferrer">"Despacito" - Luis Fonsi ft. Daddy Yankee</a></li>
            <li><a href="https://www.youtube.com/watch?v=0I647GU3Jsc" target="_blank" rel="noopener noreferrer">"Natural" - Imagine Dragons</a></li>
          </ul>
        </section>
        <section className="artista">
          <h1>Conheça Este Artista</h1>
          <div className="artista-container">
            <iframe src="https://www.youtube.com/embed/HVSj6mwqdvA" frameborder="0" allowfullscreen></iframe>
            <div className="info">
              <h1>Você conhece PlayerTauz?</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aspernatur ad similique quos inventore officiis expedita dignissimos recusandae incidunt eius voluptas deleniti dolor.</p>
            </div>
          </div>
        </section>
      </header>
      </MusicasStyle>
      </>
    )
  }
  
  export default Musicas
  