import styled from 'styled-components'

export const LoginStyle = styled.section`

.main-container{
    background-color: #000;
    color: gold;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background-color: #1a1a1ace;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 400px;
  height: 500px;
}

.login-box h1 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: gold;
}

.input-container {
  margin-bottom: 20px;
  text-align: left;
}

.input-container label {
  display: block;
  margin-bottom: 5px;
  color: #aaa;
}

.input-container input {
  width: 100%;
  padding: 10px;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-container input:focus {
  background-color: #000;
  color: gold;
  outline: none;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: gold;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.login-button:hover {
  background-color: gold;
}

.forgot-password {
  margin-top: 15px;
}

.forgot-password a {
  color: gold;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.signup-link {
  margin-top: 20px;
  color: #aaa;
}

.signup-link a {
  color: gold;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

`