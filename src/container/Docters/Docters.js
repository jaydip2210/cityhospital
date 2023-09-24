import React from 'react';
import { DoctHeading, Heading } from '../../components/Ui/Heading/Heading';
import { DoctText1 } from '../../components/Ui/Text/Text';

function Docters(props) {
    return (
       <section id="doctors" className="doctors">
  <div className="container">
    <div className="section-title">
      <Heading>Doctors</Heading>
      <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <DoctHeading>Atha Smith</DoctHeading>
            <span>Chief Medical Officer</span>
            <DoctText1>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</DoctText1>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <DoctHeading>John White</DoctHeading>
            <span>Anesthesiologist</span>
            <DoctText1>Aenean ac turpis ante. Mauris velit sapien.</DoctText1>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <DoctHeading>Umika Loha</DoctHeading>
            <span>Cardiology</span>
            <DoctText1>Curabitur luctus eleifend odio. Phasellus placerat mi.</DoctText1>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <DoctHeading>Daimy Smith</DoctHeading>
            <span>Neurosurgeon</span>
            <DoctText1>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</DoctText1>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default Docters;