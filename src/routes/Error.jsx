import { useNavigate } from "react-router-dom";
import { ErrorStyle } from "../css/ErrorStyle";

function Error() {
    
    // Hook para navegação
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/"); // Volta para a página inicial
    }

    return (
        <ErrorStyle>
            <div className="error-container">
                <h1 className="error-title">404</h1>
                <p className="error-message">Oops! A página que você está procurando não foi encontrada.</p>
                <button className="go-back-button" onClick={handleGoBack}>
                    Voltar para a Página Inicial
                </button>
            </div>
        </ErrorStyle>
    );
}

export default Error;
