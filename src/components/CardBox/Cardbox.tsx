import React from 'react';
import { ICardboxData } from '../../interfaces/ICardbox';
import styled from 'styled-components';

const Cardbox: React.FC<ICardboxData> = ({to, description, title,...rest}) => {

  return (
      <React.Fragment>
          <CardboxMargem>
            <CardBox href={to || '/'} {...rest}>
                <h1>{title || ''}</h1>
                <p>{description || ''}</p>
            </CardBox>
          </CardboxMargem>
      </React.Fragment>
  )   
}

const CardBox = styled.a<ICardboxData>`
  width: 100%;
  height: 100%;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  margin: 0 auto;

  border-radius: 1rem;

  h1 {
    font-weight: bold;
    color: white;
    
    font-size: 3rem;
  }

  p {
    font-weight: 400;
    color: white;
    font-size: 0.8rem;
  }

  background: ${(props) => (props.isimage ? `url(${(props?.imageurl)})` : "#4b4848")};
  background-size: cover;
  background-position: center;
`;

const CardboxMargem = styled.div`
  background-color: #000;

  max-width: 500px;
  height: 200px;
  width: 100%;
`;

export default Cardbox;