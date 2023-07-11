import React from 'react'
import {AppBar,Toolbar,Typography} from "@mui/material"
import UserNavbar from './userNavbar'

export default function UserDash() {
  return (
    <div>
    <AppBar color="transparent">
    <Toolbar>
    <Typography sx={{marginRight: 'auto', color: 'white'}}>
    </Typography>
    <UserNavbar/>
    </Toolbar>
    </AppBar>
    </div>
    )
}
//  <Link style={{ textDecoration: 'none', color: 'white'}} to="/Menu">FOOD MENU</Link>
