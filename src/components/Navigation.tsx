import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import Toolbar from '@mui/material/Toolbar'

const Navigation = ({ parentToChild, modeChange }: any) => {
  const { mode } = parentToChild

  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navigation')
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight
        setScrolled(scrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{ margin: 0, padding: 0 }}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
          >
            {mode === 'dark' ? (
              <LightModeIcon onClick={() => modeChange()} />
            ) : (
              <DarkModeIcon onClick={() => modeChange()} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
