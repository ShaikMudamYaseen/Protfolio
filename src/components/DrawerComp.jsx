import { IconButton, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const DrawerComp = () => {
const [openDrawer, setOpenDrawer]=useState(false)

  return (
    <React.Fragment>
      <SwipeableDrawer open={openDrawer} onClose={()=>setOpenDrawer(!openDrawer)} anchor={"right"}>
        <List>
          <ListItemButton onClick={()=>setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>About me</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuSharpIcon/>

      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
