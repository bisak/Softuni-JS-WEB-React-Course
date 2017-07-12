import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class FooterComponent extends Component {
  render () {
    return (
      <footer className='footer thin-grey-border'>
        <div className='container'>
          <Grid>
            <Row className='show-grid'>
              <Col md={6} xs={6}>
                <h4 className='footer-text'>React Project</h4>
              </Col>
              <Col md={6} className='float-right'>
                <span className='footer-text-small' style={{display: 'block'}}>Built by</span>
                <span><a href='https://github.com/biskazz' rel='noopener noreferrer' target='_blank'>biskazz</a></span>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    )
  }
}

export default FooterComponent
