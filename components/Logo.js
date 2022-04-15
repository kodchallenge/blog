import styled from 'styled-components'

const LogoRoot = styled.a`
    color: white;
    user-select: none;
    font-size: 24px;
    text-decoration: none;
    font-weight: 600;
    & span {
        color: rgb(255, 149, 17) !important;
        background-color: rgb(34, 34, 34);
        border-radius: 5px;
        padding: 3px 8px;
    }
`
const Logo = (props) => {
    return (
        <LogoRoot {...props} href="https://kodchallenge.com">
            <span>KOD</span>CHALLENGE
        </LogoRoot>
    )
}

export default Logo