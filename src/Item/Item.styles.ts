import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
  }
  img { 
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    padding: 0 10px;
  }
  h3 {
    padding: 10px;
    font-family: 'Helvetica';
  }
  h4 {
    padding: 10px;
    font-family: 'system-ui';
    font-weight: 300;
  }
`;