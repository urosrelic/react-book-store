/* eslint-disable react/prop-types */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

export const BookDetails = ({ bookDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyles = {
    backgroundColor: '#17242a',
    color: '#3aafa9',
  };

  return (
    <div className='book-details'>
      <div className='book-details-img'>
        <img src={bookDetails.imageUrl} />
      </div>
      <div className='book-details-data'>
        <div className='book-details-title'>
          <span>{bookDetails.title}</span>
        </div>
        <div className='book-details-quotes'>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote1}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel2d-content'
              id='panel2d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote2}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel3d-content'
              id='panel3d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote3}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
