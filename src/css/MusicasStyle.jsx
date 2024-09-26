import styled from 'styled-components'

export const MusicasStyle = styled.section`

.main-container {
  padding: 40px;
  background-color: rgb(0, 0, 0);
  color: gold; 
}

.main-container h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: gold;
  text-transform: uppercase;
  border-bottom: 2px solid gold;
  padding-bottom: 10px;
}

.musicas-populares ul {
  list-style-type: none;
  padding: 0;
}

.musicas-populares ul li {
  margin-bottom: 20px;
}

.musicas-populares ul li a {
  color: #fff; 
  text-decoration: none;
  transition: color 0.3s ease;
}

.musicas-populares ul li a:hover {
  color: gold; 
}

.artista {
  color: gold; 
  text-transform: uppercase;
  text-align: left;
  padding-top: 20px;
}

.artista h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.artista-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-top: 20px;
}

.artista-container iframe {
  width: 50%; 
  height: 500px;
  border: 2px solid gold; 
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
}

.info{
    width: 40%; 
    height: 500px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('src/assets/Tauz.png');
    background-size: cover;
    background-position: end;
    background-repeat: no-repeat;
    border-bottom-right-radius:100%;
    border-bottom-left-radius:100%;
}

.info h1,p{
    text-align: end;
}

.info p{
    margin-left: auto;
    max-width: 500px;
}

`