import styled from 'styled-components';

const FullScreenPage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${({z}) => z || 1};
`

export default FullScreenPage;