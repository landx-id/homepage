import React from 'react'
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SectionFAQ = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Registrasi" {...a11yProps(0)} />
                            <Tab label="Verifikasi" {...a11yProps(1)} />
                            <Tab label="Pembelian" {...a11yProps(2)} />
                            <Tab label="Penarikan" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <iframe src="https://drive.google.com/file/d/18bYZdHIzC87gyNxBCLZWs8BkoK-GU25_/preview" max-width="100%" allow="autoplay" style={{ display: 'inherit', margin: '16px auto' }} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <iframe src="https://drive.google.com/file/d/1baJnl6seojZQE8k3yilQYWIyjaL6onq2/preview" max-width="100%" allow="autoplay" style={{ display: 'inherit', margin: '16px auto' }} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <iframe src="https://drive.google.com/file/d/1ullPCMylAjHexywF2JLRaQMzKZZj6fQK/preview" max-width="100%" allow="autoplay" style={{ display: 'inherit', margin: '16px auto' }} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <iframe src="https://drive.google.com/file/d/1B4EX4J6lq0YFuqPr_HIhVpOMotsoBENQ/preview" max-width="100%" allow="autoplay" style={{ display: 'inherit', margin: '16px auto' }} />
                    </TabPanel>
                </Grid>
                <Grid item xs={12} md={6}>
                    b
                </Grid>
            </Grid>
        </Container>
    )
}

export default SectionFAQ