import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const countryList = [
  "United States", "Canada", "Australia", "India", "United Kingdom", // Add more countries as needed
];

const Contact = () => {
  const [formData, setFormData] = useState({
    businessEmail: '',
    name: '',
    companyName: '',
    companySize: '',
    phoneNumber: '',
    jobTitle: '',
    country: '',
    termsAgreed: false,
    readAndAgree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (


    <div className='bg-gradient-to-r from-blue-800 to-purple-600'>

   
    <Box sx={{ maxWidth: 600, mx: 'auto',  p: 3, border: '4px solid black', borderRadius: '8px', backgroundColor: 'whitesmoke'  }}>
        <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontFamily: 'Roboto, sans-serif',  // You can choose any other font family here
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #ff8a00, #e52e71)', // Adding gradient to the text
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', // Makes the gradient visible inside the text
        textAlign: 'center',
        mb: 4,  // Adds margin bottom
      }}
    >
      Contact Us
    </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Business Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Business Email"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Company Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Company Size Dropdown */}
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Company Size</InputLabel>
              <Select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                label="Company Size"
              >
                <MenuItem value="1-10">1-10</MenuItem>
                <MenuItem value="10-20">10-20</MenuItem>
                <MenuItem value="20-50">20-50</MenuItem>
                <MenuItem value="50-100">50-100</MenuItem>
                <MenuItem value="100-500">100-500</MenuItem>
                <MenuItem value="500+">500+</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              type="tel"
            />
          </Grid>

          {/* Job Title */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Country Dropdown */}
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Country"
              >
                {countryList.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Terms and Conditions */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />
              }
              label="I have read the Terms and Conditions"
              required
            />
          </Grid>

          {/* Read and Agree */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="readAndAgree"
                  checked={formData.readAndAgree}
                  onChange={handleChange}
                />
              }
              label="I have read and agree"
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
 
  );
};

export default Contact;
