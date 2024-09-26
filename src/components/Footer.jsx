import { FooterStyle } from "../css/FooterStyle"

function Footer() {

    return (
      <>
      <FooterStyle>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2>Loja Musicaly</h2>
            <p>A melhor loja de instrumentos musicais, oferecendo produtos de alta qualidade para todos os músicos, do iniciante ao profissional.</p>
          </div>

          <div className="footer-links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/musicas">Músicas</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contato</h3>
            <p>Telefone: (11) 1234-5678</p>
            <p>Email: contato@musicaly.com</p>
            <div className="footer-social">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
          <p>&copy; 2024 Loja Musicaly. Todos os direitos reservados.</p>
      </div>
      </FooterStyle>
      </>
    )
  }
  
  export default Footer
  