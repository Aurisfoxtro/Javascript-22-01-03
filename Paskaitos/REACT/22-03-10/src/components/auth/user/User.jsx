import { useState } from 'react';
import { useEffect } from 'react';
import{Navbar, NavDropdown} from 'react-bootstrap';
import{useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import { auth, logout } from '../../../services/authServices';
import * as userServices from "../../../services/userServices";

const User = ()=>{
    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        if(loading) return
        if(!user) navigate('/')
        userServices.getUserData(user, setUserData)

    }, [userData])

    console.log(userData);
    return(
        <>
        {(user)?
        <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Vardenis pavardenis" id="basic-nav-dropdown">
                <NavDropdown.Item>vardenis@kazkas.lt</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={logout}>Atsijungti</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        :
        <Navbar.Collapse className="justify-content-end">
            <p>Prisijungti</p>
        </Navbar.Collapse>
    }
    </>
    )
}

export default User