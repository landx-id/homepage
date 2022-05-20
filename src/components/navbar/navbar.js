import * as React from 'react';
import { Link } from 'gatsby';
import { AppBar, Container, Toolbar, Button, Box, MenuItem, Typography, Stack, Paper, Popper, MenuList, Grow, ClickAwayListener, List } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AnchorLink } from "gatsby-plugin-anchor-links"
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

  return (
    <>
      <AppBar position={widthWindows < 1055 ? "relative" : "static"} sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }} className='container-navbar'>
        <Container>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0', paddingRight: '0' }}>
            <Link to='/'>
              <img src="/images/landx-logo.webp" style={{ marginBottom: '0', height: `30px`, width: `91px` }} alt="Logo LandX Platform Securities Crowdfunding yang diawasi dan berizin OJK - Temukan bisnis untuk investasi terbaik di LandX" title="LandX adalah startup crowdfunding Indonesia berbasis yang memberikan kesempatan untuk berinvestasi ke dalam bisnis dengan modal kecil" />
            </Link>
            {widthWindows > 1055 ?
              <>
                <Box>
                  <Box sx={{ display: 'flex' }}>
                    <AnchorLink to='/#why-landx' className='text-link'>
                      <MenuItem>
                        <Typography textAlign="center">
                          Mengapa LandX
                        </Typography>
                      </MenuItem>
                    </AnchorLink>
                    <AnchorLink to='/#ongoing-projects' className='text-link'>
                      <MenuItem>
                        <Typography textAlign="center">
                          Proyek
                        </Typography>
                      </MenuItem>
                    </AnchorLink>
                    <Link to='/kinerja-penerbit' className='text-link'>
                      <MenuItem>
                        <Typography textAlign="center">
                          Kinerja Penerbit
                        </Typography>
                      </MenuItem>
                    </Link>
                    <Link to='/contact' className='text-link'>
                      <MenuItem>
                        <Typography textAlign="center">
                          Kontak
                        </Typography>
                      </MenuItem>
                    </Link>
                    <a href='https://landx.id/blog' className='text-link'>
                      <MenuItem>
                        <Typography textAlign="center">
                          Blog
                        </Typography>
                      </MenuItem>
                    </a>

                    <Stack direction="row" spacing={2}>
                      <div>
                        <MenuItem onClick={handleToggle} className="text-btn-link">
                          <Typography textAlign="center"
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            className='text-link text-btn-link'
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
                                    <a href='https://landx.id/blog/jobs-at-landx' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Karir</MenuItem>
                                    </a>
                                    <hr />
                                    <Link to='/syarat-dan-ketentuan'
                                      className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Syarat & Ketentuan</MenuItem>
                                    </Link>
                                    <hr />
                                    <AnchorLink to='/#how-it-works' className='text-link'>
                                      <MenuItem>
                                        <Typography textAlign="center">
                                          Cara Kerja
                                        </Typography>
                                      </MenuItem>
                                    </AnchorLink>
                                    <hr />
                                    <Link to='/privacy-policy' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Kebijakan Privasi</MenuItem>
                                    </Link>
                                    <hr />
                                    <Link to='/service-level-agreement' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Service Level Agreement</MenuItem>
                                    </Link>
                                    <hr />
                                    <Link to='/kebijakan-isms' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Kebijakan ISMS</MenuItem>
                                    </Link>
                                    <hr />
                                    <Link to='/mitigasi-risiko' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>Mitigasi Resiko</MenuItem>
                                    </Link>
                                    <hr />
                                    <a href='https://landx.id/blog/faq-landx' className='text-link-company'>
                                      <MenuItem onClick={handleClose} className='menulink'>FAQ</MenuItem>
                                    </a>
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
                  {/* <a href='https://app.landx.id/webapp' className='btn-text' style={{ marginRight: '16px', textDecoration: 'none' }}>
                <Button color="success">PENDAFTARAN</Button>
              </a>
              <a href='https://app.landx.id/webapp/login' className='btn-outline-success' style={{ textDecoration: 'none' }}>
                <Button color="success" variant='outlined'>LOGIN</Button>
              </a> */}

                  <Link to='/pendaftaran-perusahaan' className='btn-text'>
                    <Button color="success">PENDAFTARAN PERUSAHAAN</Button>
                  </Link>
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
              <List component="nav" aria-label="mailbox folders">
                <AnchorLink to='/#why-landx' className='text-link'>
                  <MenuItem>
                    <Typography textAlign="center">
                      Mengapa LandX
                    </Typography>
                  </MenuItem>
                </AnchorLink>
              </List>
              <List component="nav" aria-label="mailbox folders">
                <AnchorLink to='/#ongoing-projects' className='text-link'>
                  <MenuItem>
                    <Typography textAlign="center">
                      Proyek
                    </Typography>
                  </MenuItem>
                </AnchorLink>
              </List>
              <List component="nav" aria-label="mailbox folders">
                <Link to='/kinerja-penerbit' className='text-link'>
                  <MenuItem>
                    <Typography textAlign="center">
                      Kinerja Penerbit
                    </Typography>
                  </MenuItem>
                </Link>
              </List>
              <List component="nav" aria-label="mailbox folders">
                <Link to='/contact' className='text-link'>
                  <MenuItem>
                    <Typography textAlign="center">
                      Kontak
                    </Typography>
                  </MenuItem>
                </Link>
              </List>
              <List component="nav" aria-label="mailbox folders">
                <a href='https://landx.id/blog' className='text-link'>
                  <MenuItem>
                    <Typography textAlign="center">
                      Blog
                    </Typography>
                  </MenuItem>
                </a>
              </List>
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
              {mobileNavSubMenu ?
                <>
                  <a href='https://landx.id/blog/jobs-at-landx' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Karir</MenuItem>
                  </a>
                  <hr />
                  <Link to='/syarat-dan-ketentuan'
                    className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Syarat & Ketentuan</MenuItem>
                  </Link>
                  <hr />
                  <AnchorLink to='/#how-it-works' className='text-link'>
                    <MenuItem>
                      <Typography textAlign="center">
                        Cara Kerja
                      </Typography>
                    </MenuItem>
                  </AnchorLink>
                  <hr />
                  <Link to='/privacy-policy' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Kebijakan Privasi</MenuItem>
                  </Link>
                  <hr />
                  <Link to='/service-level-agreement' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Service Level Agreement</MenuItem>
                  </Link>
                  <hr />
                  <Link to='/kebijakan-isms' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Kebijakan ISMS</MenuItem>
                  </Link>
                  <hr />
                  <Link to='/mitigasi-risiko' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>Mitigasi Resiko</MenuItem>
                  </Link>
                  <hr />
                  <a href='https://landx.id/blog/faq-landx' className='text-link'>
                    <MenuItem onClick={handleClose} className='menulink'>FAQ</MenuItem>
                  </a>
                </>
                : ''}
            </Container>

            <div className='container-btn'>
              {/* <a href='https://app.landx.id/webapp' className='btn-text' style={{ marginRight: '16px', textDecoration: 'none' }}>
                <Button color="success">PENDAFTARAN</Button>
              </a>
              <a href='https://app.landx.id/webapp/login' className='btn-outline-success' style={{ textDecoration: 'none' }}>
                <Button color="success" variant='outlined'>LOGIN</Button>
              </a> */}

              <Link to='/pendaftaran-perusahaan' className='btn-text'>
                <Button color="success">PENDAFTARAN PERUSAHAAN</Button>
              </Link>
            </div>
          </div>
          : ''
        }
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
