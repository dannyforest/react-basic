import styled, {keyframes} from "styled-components";

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.05);
  }
`;

// Styled button with light blue theme
export const StyledButton = styled.button`
  background-color: #add8e6; /* Light blue */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${growAnimation} 0.3s forwards;
  }
`;