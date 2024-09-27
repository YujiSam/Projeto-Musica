import styled from 'styled-components'

export const DashboardStyle = styled.section`

.dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #1e1e1e 0%, #2c2c2c 100%);
    color: #fff;
    padding: 20px;
}

.dashboard-title {
    font-size: 3rem;
    color: gold;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.dashboard-content {
    background-color: #333;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 400px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
}

.dashboard-content:hover {
    transform: scale(1.05);
}

.dashboard-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #bbb;
}

.dashboard-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.dashboard-actions button {
    background-color: gold;
    color: #333;
    border: none;
    padding: 12px 25px;
    margin: 10px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
}

.dashboard-actions button:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}

.logout-button {
    margin-top: 20px;
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease-in-out;
}

.logout-button:hover {
    background-color: #c0392b;
    transform: translateY(-3px);
}

`