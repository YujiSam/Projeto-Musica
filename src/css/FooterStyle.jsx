import styled from 'styled-components'

export const FooterStyle = styled.section`

.footer {
  background-color: #000; 
  color: #ffd700; 
  padding: 2rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-about {
  max-width: 350px;
}

.footer-about h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.footer-about p {
  color: #ddd; 
  line-height: 1.6;
}

.footer-links h3, .footer-contact h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ffd700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #fff; 
}

.footer-contact p {
  color: #ddd;
  margin-bottom: 0.5rem;
}

.footer-social a {
  margin-right: 10px;
  display: inline-block;
  transition: transform 0.3s ease;
  color:gold;
}

.footer-social a:hover {
  transform: scale(1.2);
}

.footer-social img {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  background-color: #111;
  text-align: center;
  padding: 1rem;
}

.footer-bottom p {
  color: #999;
  font-size: 0.9rem;
}

`