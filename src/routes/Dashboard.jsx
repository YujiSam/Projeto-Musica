import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "../css/DashboardStyle";

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Você saiu com sucesso.");
        navigate("/");
    }

    return (
        <DashboardStyle>
            <div className="dashboard-container">
                <h1 className="dashboard-title">Bem-vindo ao Dashboard</h1>

                <div className="dashboard-content">
                    <p>Aqui você pode ver informações da sua conta ou realizar ações rápidas.</p>

                    <div className="dashboard-actions">
                        <button onClick={() => navigate("#")}>Ver Perfil</button>
                        <button onClick={() => navigate("#")}>Configurações</button>
                    </div>

                    <button className="logout-button" onClick={handleLogout}>
                        Sair
                    </button>
                </div>
            </div>
        </DashboardStyle>
    );
}

export default Dashboard;
