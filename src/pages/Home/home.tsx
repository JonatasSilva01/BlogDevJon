import React from "react";
import styled from "styled-components";
import HeaderComponent from "../../components/Header/Header";
import { mockCardbox, mockLink } from "../../mock/mock";
import ThemeDefault from "../../Themes/ThemeDefault";
import { DescriptionFunction, ImagesUrl } from "../../util/util.";
import Cardbox from '../../components/CardBox/Cardbox';

interface HomeConfigurationProp {
    dark?: string;
}

const image = ImagesUrl();
const description = DescriptionFunction();

const Home: React.FC <HomeConfigurationProp> = () => {
    return (
        <React.Fragment>
            <ThemeDefault>
                <MainComponent>
                    <HeaderComponent 
                        title="JonatasDev"
                        secondarycolor="#FFF"
                        isimage="true"
                        backgroundurl={image}
                        listlink={mockLink}
                        description={description}
                        image='https://avatars.githubusercontent.com/u/62606709?v=4'
                    />
                    <section className='slider'>
                        {mockCardbox.map((item, index) => (
                            <Cardbox 
                                key={`cardBox_${index}`}
                                to={item.to}
                                isimage={item.isImage}
                                imageurl={item.imageurl}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </section>
                </MainComponent>
            </ThemeDefault>
        </React.Fragment>
    );
}

const MainComponent = styled.section<HomeConfigurationProp>`
    width: 100%;
    
    section.slider {
        max-width: 1500px;
        overflow: hidden;
        display: flex;
        gap: 1rem;
        margin: 10px auto;
    }    
`;
export default Home;