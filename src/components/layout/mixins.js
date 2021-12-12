const drawerWidth = 240

export const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
    transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
        paddingLeft: theme.spacing(1)
    },
});
 