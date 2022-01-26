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
                      Beli min. 20 lot: Dapatkan Mini Finance Bootcamp with Experts
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Beli min. 50 lot: Dapatkan EXCLUSIVE Mini Finance Bootcamp with Experts
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Beli min. 100 lot: Dapatkan Offline Finance Bootcamp with Experts Happy Hour Meetup & Discussion with Speakers
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Beli min. 250 lot: Dapatkan Offline Bootcamp Finance with Experts Business tour
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
