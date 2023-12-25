import React from 'react';
import { ICardboxData } from '../../interfaces/ICardbox';
import styled from 'styled-components';

  const Cardbox: React.FC<ICardboxData> = ({to, description, title,...rest}) => {

    return (
        <React.Fragment>
            <CardBox href={to || '/'} {...rest}>
                <h1>{title || 'Teste'}</h1>
                <p>{description || 'Description Teste'}</p>
            </CardBox>
        </React.Fragment>
    )   
  }

const CardBox = styled.a<ICardboxData>`
  width: 100%;
  max-width: 500px;
  height: 300px;

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

export default Cardbox;