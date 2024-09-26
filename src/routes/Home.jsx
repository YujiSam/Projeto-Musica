import { HomeStyle } from "../css/HomeStyle"
import Violao from "../assets/Violao.jpg"
import Bateria from "../assets/Bateria.jpg"
import Piano from "../assets/Piano.jpg"


function Home() {

    return (
      <>
      <HomeStyle>
        <header className="body">
          <section className="banner">
            <h1>Experimente do Melhor</h1>
            <button>Saiba Mais</button>
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
              <h1>Preço: $150,00</h1>
            </div>
          </div>
        </header>
      </HomeStyle>
      </>
    )
  }
  
  export default Home
  