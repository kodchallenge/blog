import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"

const HeaderContainer = styled.div`
    position: sticky;
    z-index: 9999;
    top: 0;
    background-color: #111;
    color: white;
    height: 80px;
    font-weight: bold;
    font-family: "FF Mark W05",Arial,sans-serif;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: auto;
    div {
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            width: 90%;
            display: block;
            text-align: center;
        }
    }
`

const Navs = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 50px;
    @media (max-width: 768px) {
        display: none;
    }
`

const NavLink = styled.a`
    all: unset;
    display: flex;
    align-items:center;
    cursor: pointer;
    display: inline-flex;
    padding: 5px 10px;
    &:hover {
        background: rgb(255,149,17);
        border-radius: 10px;
    }
`

const MenuButton = styled.button`
    all: unset;
    
    @media (min-width: 768px) {
        display: none;
    }
`

const Drawer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    .overlay {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }
    .sidebar {
        height: 100%;
        width: 75%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #111;
        text-align: center; 
        padding-top: 40px;
        .logo {
            font-weight: 800;
        }

        .links * {
            display: block;
            margin-top: 40px;
            font-size: 24px;
            color: white;
            font-weight: 700;
            border-bottom: 1px solid #975900;
        }
    }
`

const Header = () => {
    const [isOpenDrawer, setOpenDrawer] = useState(false)

    const NavLinks = () => {
        return (
            <>
                <NavLink href="/">Geliştirme Günlüğü</NavLink>
                {/* <NavLink>Teknolojiler</NavLink>
                <NavLink>Kariyer</NavLink> */}
            </>
        )
    }

    return (
        <>
            <HeaderContainer>
                <Content>
                    <MenuButton onClick={() => setOpenDrawer(o => !o)}>
                        <i class="fa fa-bars"></i>
                    </MenuButton>
                    <div>
                        <Logo />
                        <Navs>
                            <NavLinks />
                        </Navs>
                    </div>
                </Content>
            </HeaderContainer >
            {isOpenDrawer && (
                <Drawer className="">
                    <div className="overlay" onClick={() => setOpenDrawer(false)}/>
                    <div className="sidebar animate__animated animate__slideInLeft">
                        <Logo className="logo" />
                        <div className="links">
                            <NavLinks />
                        </div>
                    </div>
                </Drawer>
            )}
        </>
    )
}

export default Header