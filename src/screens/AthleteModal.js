import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import './AthleteModal.css'; // Import CSS file for modal styling

function AthleteModal({ open, onClose, athlete }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      BackdropProps={{
        onClick: onClose, // This will close the modal when the backdrop is clicked
      }}
      className="athlete-modal"
    >
      <DialogTitle>{athlete.name}</DialogTitle>
      <DialogContent>
        <img src={athlete.imageUrl} alt={athlete.name} className="athlete-image" />
        <Typography variant="body1">Sport: {athlete.sport}</Typography>
        <Typography variant="body2">Birthplace: {athlete.birthplace}</Typography>
        <Typography variant="body2">Age: {athlete.age}</Typography>
        <Typography variant="body2">Team: {athlete.team}</Typography>
        <Typography variant="body2">Career Highlights:</Typography>
        <ul className="highlight-list">
          {athlete.cw.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export default AthleteModal;
