import styled from 'styled-components';
import theme from '../config/Theme';

console.log(theme.spacing.x2);

const Container = styled.div`
    width: auto;
    max-width: 720px;
    margin: auto;
    padding: 0 ${({padding}) => padding || theme.spacing.x2}px;

    ${({fillHeight}) => fillHeight && `height: 100%;`}
`

export default Container;