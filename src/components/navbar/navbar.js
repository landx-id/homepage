import * as React from 'react';
import { Link } from 'gatsby';
import { AppBar, Container, Toolbar, Button, Box, MenuItem, Typography, Stack, Paper, Popper, MenuList, Grow, ClickAwayListener, List } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.scss"

const ResponsiveAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const [mobileNav, setMobileNav] = React.useState(false);
  const [mobileNavSubMenu, setMobileNavSubMenu] = React.useState(false);
  const [widthWindows, setWidthWindows] = React.useState('')
  const anchorRef = React.useRef(null);

  React.useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setMobileNavSubMenu(!mobileNavSubMenu)
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const linksName = [
    ['#why-landx', 'Mengapa Landx'],
    ['#ongoing-projects', 'Proyek'],
    ['#how-it-works', 'Cara Kerja'],
    ['https://landx.id/contact.html', 'Kontak'],
    ['https://landx.id/blog', 'Blog']
  ]

  const subLinksName = [
    ['https://landx.id/blog/jobs-at-landx', 'Karir'],
    ['https://landx.id/syarat-dan-ketentuan.html', 'Syarat & Ketentuan'],
    ['https://landx.id/privacy-policy.html', 'Kebijakan Privasi'],
    ['https://landx.id/service-level-agreement.html', 'Service Level Agreement'],
    ['https://landx.id/kebijakan-isms.html', 'Kebijakan ISMS'],
    ['https://landx.id/mitigasi-risiko.html', 'Mitigasi Resiko'],
    ['https://landx.id/blog/faq-landx', 'FAQ'],
  ]


  return (
    <>
      <AppBar position={widthWindows < 1055 ? "relative" : "static"} sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
        <Container>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0', paddingRight: '0' }}>
            <Link to='/'>
              <img src="/images/landx-logo.webp" alt="logo landx" style={{ marginBottom: '0' }} />
            </Link>
            {widthWindows > 1055 ?
              <>
                <Box>
                  <Box sx={{ display: 'flex' }}>
                    {linksName && linksName.map(linkName => (
                      <a href={linkName[0]} className='text-link' key={linkName[1]}>
                        <MenuItem>
                          <Typography textAlign="center">
                            {linkName[1]}
                          </Typography>
                        </MenuItem>
                      </a>
                    ))}

                    <Stack direction="row" spacing={2}>
                      <div>
                        <MenuItem onClick={handleToggle}>
                          <Typography textAlign="center"
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            className='text-link'
                          >
                            Perusahaan
                          </Typography>
                          {open ? <ExpandLess sx={{ color: '#5e798d' }} /> : <ExpandMore sx={{ color: '#5e798d' }} />}
                        </MenuItem>
                        <Popper
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          placement="bottom-start"
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === 'bottom-start' ? 'left top' : 'left bottom',
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                  >
                                    {subLinksName.map(subLink => (
                                      <>
                                        <a href={subLink[0]} className='text-link'>
                                          <MenuItem onClick={handleClose} className='menulink'>{subLink[1]}</MenuItem>
                                        </a>
                                        {subLink[1] === 'FAQ' ? '' : <hr />}
                                      </>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </div>
                    </Stack>

                  </Box>
                </Box>
                <div className='container-btn'>
                  <a href='https://landx.id/pendaftaran-perusahaan.html' className='btn-text'>
                    <Button color="success">PENDAFTARAN PERUSAHAAN</Button>
                  </a>
                </div>
              </>
              :
              <div>
                <MenuIcon className='icon-menu' onClick={() => setMobileNav(!mobileNav)} />
              </div>
            }
          </Toolbar>
        </Container>

        {mobileNav && widthWindows < 1055 ?
          <div>
            <div>
              {linksName && linksName.map(linkName => (
                <List component="nav" aria-label="mailbox folders">
                  <a href={linkName[0]} className='text-link' key={linkName[1]}>
                    <MenuItem>
                      <Typography textAlign="center">
                        {linkName[1]}
                      </Typography>
                    </MenuItem>
                  </a>
                </List>
              ))}
            </div>

            <div>
              <MenuItem onClick={handleToggle}>
                <Typography textAlign="center"
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  className='text-link'
                >
                  Perusahaan
                </Typography>
                {mobileNavSubMenu ? <ExpandLess sx={{ color: '#5e798d' }} /> : <ExpandMore sx={{ color: '#5e798d' }} />}
              </MenuItem>
            </div>

            <Container>
              {mobileNavSubMenu
                ? subLinksName.map(subLink => (
                  <>
                    <a href={subLink[0]} className='text-link'>
                      <MenuItem onClick={handleClose} className='menulink'>{subLink[1]}</MenuItem>
                    </a>
                    <hr />
                  </>
                ))
                : ''}
            </Container>

            <div className='container-btn'>
              <a href='https://landx.id/pendaftaran-perusahaan.html' className='btn-text'>
                <Button color="success">PENDAFTARAN PERUSAHAAN</Button>
              </a>
            </div>
          </div>
          : ''
        }
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
