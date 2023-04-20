import React from "react";
import {Nav,NavItem,NavLink,Navbar,NavbarBrand} from 'reactstrap'

const NavBar = () =>{
    return(
        <Navbar className="bg-dark ">
            <NavbarBrand href="/"> 
                <Nav >
                    <NavItem>
                        <NavLink href="/film">Films</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/series">Series</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cartoon">Cartoons</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Action</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/horor">Horror</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Romance</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/war">War</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Trending</NavLink>
                    </NavItem>
                </Nav>


            
            </NavbarBrand>
            <span className="material-symbols-outlined">search</span>
        </Navbar>

    )
}

export default NavBar;
