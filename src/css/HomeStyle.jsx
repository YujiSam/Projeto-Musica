import styled from 'styled-components'

export const HomeStyle = styled.section`

.body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.banner {
  background-color: #ffd700; 
  color: #000; 
  text-align: center;
  padding: 4rem 0;
  border-bottom: 5px solid #000;
  position: relative; 
}

.banner h1 {
  font-size: 2.5rem;
  display: flex;
  padding: 20px;
  margin: 0;
  letter-spacing: 2px;
}

.btn {
  margin-top: 1rem;
  margin-left: 20px;
  max-width: 130px;
  padding: 1rem 1.5rem;
  background-color: #000; 
  color: #ffd700; 
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #333;
  transform: scale(1.05); 
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  letter-spacing: 1px;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  width: 250px;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative; 
}

.card .image {
  max-height: 250px;
  min-width: 200px;
  border-radius: 10px;
  object-fit: cover; 
}

.card h2 {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.card h1 {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #333;
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
}

.promocao {
  width: 100px;
  height: 50px;
  background-color: red; 
  border-radius: 20px;
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  top: -10px;
  right: -10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.avaliacoes {
  background-color: #333;
  color: #ffd700;
  padding: 2rem;
}

.avaliacoes h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  color: #fff; 
}

.avaliacao {
  background-color: #444;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.avaliacao-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.nome-cliente {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff; 
}

.estrelas span {
  font-size: 1.5rem;
  color: #ffd700; 
}

.comentario {
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
  margin-top: 0.5rem;
}


`