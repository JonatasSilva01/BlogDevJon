import React from "react";
import styled from "styled-components";
import { MockLinks } from "../../@types/TypeListHeader";
import { IHeaderProps } from "../../interfaces/IHeadersData";

const HeaderComponent: React.FC<IHeaderProps> = ({title, image, listlink, description, ...rest}) => {
    return (
        <React.Fragment>
            <HeaderBox {...rest}>
                <div>
                    <Title {...rest}>
                        {title}
                    </Title>
                    <ul>
                        {listlink && listlink.map(({link, titleLink}: MockLinks, index) => (
                            <li key={index}>
                                <a href={link}>{titleLink}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='image-text'>
                    <div className='border-image'>
                        {image && <img src={image} alt="image" />}
                    </div>
                    <div>
                        {description && <h1>{description}</h1>}
                    </div>
                </div>
            </HeaderBox>
        </React.Fragment>
    )   
}


const HeaderBox = styled.header<IHeaderProps>`
    width: 100%;
    height: 100vh;//50vh
    
    
    div {
        padding: 1rem;
        width: 70%;
        margin: 0 auto;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .image-text {
        display: flex;
        justify-content: center;
        align-items: center;

        div > h1 {
            font-size: 5vw;
            padding: 2rem;
            color: white;
            background: #0000007f;
            text-align: center;
            width: 100%;
            margin: 8vw auto;

            strong {
                color: red;
            }
        }
    }

    .border-image {
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
        width: 30vmin;
        height: 30vmin;
        padding: 0;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    ul {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
        
        a {
            color: #fff;
            text-decoration: none;
            font-size: clamp(2vmin, calc(100% - 30%), 15vmin);
        }
    }
    background: ${(props) => (props.isimage ? `url(${(props?.backgroundurl)})` : props.darkcolor || props.lightcolor || "#F2F2")};
    background-size: cover;
    background-position: center;
`;

const Title = styled.h1<IHeaderProps>`
    font-family: 'Indie Flower', cursive;
    font-size: 1.6rem;
    color: ${(props) => {
        if(props.textcolor) {
            return props.textcolor;
        } else if (props.secondarycolor) {
            return props.secondarycolor;
        } else {
            return "#000";
        }
    }};
`;

export default HeaderComponent;