import { 
    Toolbar, 
    IconButton, 
    Typography, 
    useTheme, 
    Divider, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Box 
} from '@mui/material'
import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {DrawerHeader, CustomAppBar, CustomDrawer} from './layout/styled'


const Layout = (props) => {
    const { dark, toggleDark } = props
    const [open, setOpen] = useState(false)

    const theme = useTheme()

    // const handleOpen = () => {
    //     setOpen(true)
    // }
    const handleClose = () => {
        setOpen(false)
    }
    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <Box sx={{display: 'flex'}}>
            <CustomAppBar open={open}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <LocalFireDepartmentIcon sx={{ fontSize: '1.5em', mr: 1 }} />
                        Cold Fire
                    </Typography>
                    <IconButton
                        onClick={toggleDark}
                        color={dark ? 'primary' : 'inherit'}
                        sx={{
                            bgcolor: dark ? 'divider' : 'primary.light'
                        }}
                    >
                        {dark ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </CustomAppBar>
            <CustomDrawer variant='permanent' open={open} onClose={handleClose}>
                <DrawerHeader>
                    <IconButton onClick={handleClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary='Account' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary='Contact' />
                    </ListItem>
                </List>
            </CustomDrawer>
            <Box sx={{flexGrow: 1, padding: theme.spacing(3)}}>
                <DrawerHeader/>
                <Typography variant='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate soluta, iure tempore itaque aut officia temporibus, architecto odio autem labore. Libero maiores esse officiis, aut vitae animi tenetur alias.
                </Typography>
            </Box>
        </Box>
    )
}

export default Layout
