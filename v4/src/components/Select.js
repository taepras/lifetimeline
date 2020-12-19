import styled from 'styled-components';
import theme from '../config/Theme';

const Select = styled.select`
    width: 100%;
    border: 1px solid #eee;
    border-radius: ${theme.spacing.xs}px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
    height: ${theme.spacing.x4}px;
    padding: 0 ${theme.spacing.x1}px;
`

export default Select;