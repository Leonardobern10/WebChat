import styled from 'styled-components';
import { Colors } from '../theme/Colors';
import { Fonts } from '../theme/Fonts';
import { Content } from '../contants/Contents';

const HeaderContainer = styled.div`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-family: ${Fonts.title};
    width: 100%;
    background-color: ${Colors.green3};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LiDesign = styled.p`
    color: ${Colors.green2};
    font-weight: bold;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <LiDesign>{Content.title}</LiDesign>
        </HeaderContainer>
    );
};
