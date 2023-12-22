import React from "react";
import styled from "styled-components";
import HeaderComponent from "../../components/Header/Header";
import { mockLink } from "../../mock/mock";
import ThemeDefault from "../../Themes/ThemeDefault";
import { DescriptionFunction, ImagesUrl } from "../../util/util.";

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
                </MainComponent>
            </ThemeDefault>
        </React.Fragment>
    );
}

const MainComponent = styled.section<HomeConfigurationProp>`width: 100%;`;
export default Home;