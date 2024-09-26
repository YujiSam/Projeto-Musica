import styled from 'styled-components'

export const NavStyle = styled.section`

.nav-container {
  background-color: #000; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
  width: 100%;
}

.nav-container h1 {
  color: #ffd700;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.6); 
}

.navLink {
  color: #ffd700; 
  text-decoration: none;
  font-size: 1.2rem;
  margin-left: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.4s ease, transform 0.2s ease;
}

.navLink:hover {
  color: #fff; 
  transform: translateY(-2px); 
}

.navLink::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: #ffd700;
  transition: width 0.4s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.navLink:hover::after {
  width: 100%; 
}

.navLink:active {
  color: #ffdb58; 
  transform: translateY(1px);
}


`