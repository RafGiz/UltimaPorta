import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


export default function Navbar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ mr: 6 }} >
                        ULTIMA PORTA
                    </Typography>
                    <Typography href="/" noWrap variant="h6" component="a" sx={{
                        flexGrow: 1,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        Home
                    </Typography>
                    
                    <Typography href="/body" noWrap variant="h6" component="a" sx={{
                        flexGrow: 1,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        color: 'inherit',
                        textDecoration: 'none', }}>
                        Body
                    </Typography>
                    
                    <Typography href="/anotherbody" variant="h6" component="a" sx={{
                        flexGrow: 1,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        color: 'inherit',
                        textDecoration: 'none', }}>
                        AnotherBody
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
