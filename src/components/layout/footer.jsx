import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* Your main content goes here */}
      </div>

      <MDBFooter className='text-center text-white footer' style={{ backgroundColor: '#2b6777', padding: '2rem 0' }}>
        <MDBContainer className='p-3'>
          {/* Social Media Section */}
          <section className='mb-3'>
            <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/IndiaWaterPortal' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='https://x.com/indiawater' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='https://m.youtube.com/user/indiawaterportal' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/indiawaterportal/' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/india-water-portal' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
          </section>

          {/* Newsletter Section */}
          {/* <section>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email address' className='mb-3' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn style={{ backgroundColor: '#52ab98', color: 'white' }} type='submit' className='mb-3'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section> */}

          {/* Info Section */}
          <section className='mb-3'>
            <p>
              India Water Portal is an Arghyam initiative, aimed at bringing together the community to share knowledge and resources on water management.
            </p>
          </section>

          {/* Footer Links */}
          <section className='mb-3'>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <a href="https://www.indiawaterportal.org/about-us" className="text-white m-2" style={{ fontWeight: 'bold' }}>About Us</a>
              </MDBCol>
              <MDBCol size="auto">
                <a href="https://www.indiawaterportal.org/terms-of-use" className="text-white m-2" style={{ fontWeight: 'bold' }}>Terms of Use</a>
              </MDBCol>
              <MDBCol size="auto">
                <a href="https://www.indiawaterportal.org/privacy-policy" className="text-white m-2" style={{ fontWeight: 'bold' }}>Privacy Policy</a>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}


const pageContainer = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentWrap = {
  flex: '1',  
};


