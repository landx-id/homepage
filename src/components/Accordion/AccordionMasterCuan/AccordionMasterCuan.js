import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionMasterCuan.scss'

const AccordionMasterCuan = ({ title, content, accCategory = false }) => {
  return (
    <div className='faq-master-cuan-container'>
      {accCategory
        ?
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-title-accordion">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-content'>
              <div className="list-container">
                <ol className='num-style'>
                  <li>
                    <Typography className="text-rule">
                      Pembelian minimal 20 lot akan mendapatkan Mini Finance Bootcamp with the expert (2 webinar in 2 months - January & February), berlaku untuk 1000 orang
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Pembelian minimal 50 lot akan mendapatkan Finance bootcamp with the expert (4 webinar in 3 months February - April) berlaku untuk 1000 orang
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Pembelian minimal 100 lot {'→'} akan mendapatkan Offline bootcamp finance with the expert + happy hour meetup di satu tempat, berlaku untuk 100 orang (batch system - per batch ada 20 orang)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Pembelian minimal 250 lot akan mendapatkan Offline bootcamp finance with the expert + F&B and Business tour, berlaku untuk 100 orang (batch system - per batch ada 20 orang)
                    </Typography>
                  </li>
                </ol>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        :
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-title-accordion">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-content'>
              {content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      }
    </div>
  )
}

export default AccordionMasterCuan
