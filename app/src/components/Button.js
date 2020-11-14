import styled from 'styled-components';
import theme from '../config/Theme';

const Button = styled.button`
    ${({block}) => block && `width: 100%;` }
    border: ${({outlined}) => outlined ? '1px solid #fff' : 'none'};
    border-radius: ${theme.spacing.xs}px;
    /* height: ${theme.spacing.x4}px; */
    padding: ${theme.spacing.x1}px ${theme.spacing.x1 * 1.5}px;
    background-color: ${({outlined}) => outlined ? 'transparent' : '#C14953'};
    ${({outlined}) => !outlined && `box-shadow: 0px 4px 8px rgba(142, 34, 43, 0.21);`}
    color: #fff;
`

export default Button;