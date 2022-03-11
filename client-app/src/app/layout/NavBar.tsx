import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo" />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="activities" />
                <Menu.Item>
                    <Button positive content="Create Activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}



export default NavBar;