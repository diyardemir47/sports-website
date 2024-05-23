import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Paper, Button, MobileStepper, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SportsCarousel({ images = [], title }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (images.length === 1) {
    return (
      <Typography variant="h6" sx={{ mb: 2 }}>No images available</Typography>
    );
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = (prevActiveStep + 1) % maxSteps;
      return isNaN(nextStep) ? 0 : nextStep;
    });
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const prevStep = (prevActiveStep - 1 + maxSteps) % maxSteps;
      return isNaN(prevStep) ? maxSteps - 1 : prevStep;
    });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: isMobile ? 200 : 400,
          bgcolor: 'background.default',
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
              <Typography>{step.label}</Typography> {/* Etiket (label) */}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
        sx={{ width: '100%', mt: 2 }}
      />
    </Box>
  );
}

SportsCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default SportsCarousel;
