import { HomeStyle } from "../css/HomeStyle"
import Violao from "../assets/Violao.jpg"
import Bateria from "../assets/Bateria.jpg"
import Piano from "../assets/Piano.jpg"


function Home() {

    return (
      <>
      <HomeStyle>
        <header className="main-container">
          <section className="banner">
            <h1>Experimente do Melhor</h1>
            <a href="/musicas" className="btn">Saiba Mais</a>
          </section>
          <h1 className="title">Produtos Populares</h1>
          <div className="card-container">
            <div className="card">
              <img src={Violao} alt="Violão" className="image"/>
              <div className="promocao">
                33% de Desconto!
              </div>
              <h2>Violão</h2>
              <h1>Preço: $300,00</h1>
            </div>
            <div className="card">
              <img src={Bateria} alt="Bateria" className="image"/>
              <div className="promocao">
                25% de Desconto!
              </div>
              <h2>Bateria</h2>
              <h1>Preço: $500,00</h1>
            </div>
            <div className="card">
              <img src={Piano} alt="Piano" className="image"/>
              <div className="promocao">
                40% de Desconto!
              </div>
              <h2>Piano</h2>
              <h1>Preço: $250,00</h1>
            </div>
          </div>
          <section className="avaliacoes">
          <h2>Avaliações dos Clientes</h2>
          <div className="avaliacao">
            <div className="avaliacao-top">
              <p className="nome-cliente">João Silva</p>
              <div className="estrelas">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <p className="comentario">"Comprei um violão e a qualidade é excelente! Recomendo a todos."</p>
          </div>
          <div className="avaliacao">
            <div className="avaliacao-top">
              <p className="nome-cliente">Maria Souza</p>
              <div className="estrelas">
                <span>⭐⭐⭐⭐☆</span>
              </div>
            </div>
            <p className="comentario">"A bateria chegou rápido, ótimo atendimento, mas poderia vir com mais acessórios."</p>
          </div>
          <div className="avaliacao">
            <div className="avaliacao-top">
              <p className="nome-cliente">Carlos Mendes</p>
              <div className="estrelas">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <p className="comentario">"Ótimo preço e excelente qualidade! O piano é incrível."</p>
          </div>
        </section>
        </header>
      </HomeStyle>
      </>
    )
  }
  
  export default Home
  