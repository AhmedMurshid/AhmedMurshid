// src/components/PageFrame.js
import styled from 'styled-components';

const Frame = styled.div`
  border: 2px solid #333;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin: 40px auto;
  max-width: 600px;
`;

export default function PageFrame({ children }) {
  return <Frame>{children}</Frame>;
}
