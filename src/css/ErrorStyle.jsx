import styled from 'styled-components'

export const ErrorStyle = styled.section`

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #111; 
  color: gold;
}

.error-title {
  font-size: 10rem;
  font-weight: bold;
  color: gold;
  margin-bottom: 20px;
}

.error-message {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 30px;
}

.go-back-button {
  background-color: gold;
  color: #111;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.go-back-button:hover {
  background-color: gold;
}


`