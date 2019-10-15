import React from 'react'
import { Box, Typography, Button, theme } from '@smooth-ui/core-sc'

export default () => {
  return (
    <React.Fragment>
      <Box style={{ backgroundImage: 'url("/landing-page.jpg")', backgroundSize: 'cover', height: '100vh', width: '100vw', position: 'absolute', top: 0, zIndex: -10 }} />
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Box
          ml={100 + 'px'}
          mr={100 + 'px'} maxWidth={550}
          style={{ backgroundColor: 'white', boxShadow: '3px 3px 7px 7px rgba(0,0,0,0.1)', padding: 50 + 'px', marginTop: 50 + 'px', borderRadius: 2 + 'px' }}>
          <Typography variant="h1">
            C:V - Create your digital <span style={{ color: theme.brick }}>Curriculum Vitae</span>
          </Typography>
          <p>Integrates with Egendata - you are in complete control</p>
          <ul style={{ listStyleType: 'circle' }}>
            <li>Create, view and edit your CV in a convenient editor</li>
            <li>Build upon other existing CV data</li>
            <li>Choose among dozens of themes and layouts</li>
            <li>Share your CV with whoever you want</li>
            <li>And more</li>
          </ul>
          <Button variant="success" onClick={() => window.location.assign('/auth')} style={{ marginTop: 10 + 'px' }}>Login with Egendata</Button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
