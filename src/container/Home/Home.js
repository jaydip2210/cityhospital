import React from 'react';
import { Heading, Heading2, HomeHeading, HomeHeading2 } from '../../components/Ui/Heading/Heading';
import { Text1, Text2, Text3, Text4 } from '../../components/Ui/Text/Text';
import Review from './Review';

function Home(props) {
  return (
    <main id="main">
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <HomeHeading>Welcome to City <br />Multispeciality Hospital</HomeHeading>
          <HomeHeading2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</HomeHeading2>
        </div>
      </section>
      <section id="why-us" className="why-us">
      </section>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fas fa-user-md" />
                <span>23</span>
                <Text1>Doctors</Text1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="far fa-hospital" />
                <span>18</span>
                <Text1>Departments</Text1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-heartbeat" />
                <span>980</span>
                <Text1>Patients</Text1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-award" />
                <span>12</span>
                <Text1>Awards</Text1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <Heading>Our Facilities</Heading>
            <Text2>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
              amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
              suscipit pulvinar. Donec quis tristique lectus.</Text2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-hospital-alt" /></div>
                <h4><a href>24x7 Emergency Available</a></h4>
                <Text3>Nullam accumsan, velit et porta consequat, purus leo congue risus</Text3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-bed" /></div>
                <h4><a href>40+ Bed Facilities</a></h4>
                <Text3>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</Text3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-hospital-user" /></div>
                <h4><a href>Cardiogram Machine</a></h4>
                <Text3>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</Text3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-dna" /></div>
                <h4><a href>X-ray and Sonography</a></h4>
                <Text3>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</Text3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-wheelchair" /></div>
                <h4><a href>Semi Special, Special and Delux Room Available</a></h4>
                <Text3>Etiam in massa eu neque euismod consectetur.</Text3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-notes-medical" /></div>
                <h4><a href>Medical</a></h4>
                <Text3>Morbi vulputate, tortor nec pellentesque molestie</Text3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <div className="container">
          {/* <div className="section-title"><Heading>Reviews</Heading></div> */}
          {/* <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                    <Heading2>Jacob Wilsson</Heading2>
                    <h4>Writer</h4>
                    <Text4>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, lacus ac tincidunt tempor,
                      sapien justo ultrices ante, vel pharetra turpis ex ac nisi. Aliquam tempor egestas turpis, nec
                      commodo lorem egestas eleifend. Curabitur lacus ipsum, fermentum sit amet leo non, blandit tincidunt
                      turpis.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </Text4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                    <h3>Ava Smith</h3>
                    <h4>Artist</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Praesent pellentesque leo vestibulum, facilisis ante eget, pharetra mi. Curabitur risus mauris,
                      dignissim ullamcorper vehicula id, aliquet ut turpis. Nunc euismod nec nulla non tincidunt. Vivamus
                      nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                    <h3>Abigail Martin</h3>
                    <h4>Teacher</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fusce ante ipsum, convallis auctor dui sit amet, feugiat blandit ex. Etiam eget tortor sed augue
                      laoreet laoreet vel non libero. Sed in nibh ut sem ornare feugiat at at risus. Morbi gravida enim
                      vitae tortor fringilla tristique. Nulla ac mauris et elit eleifend suscipit et quis lacus. Nam nec
                      ex purus.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                    <h3>Alexander Tremblay</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Nam at est in nibh cursus hendrerit. Nunc commodo diam a erat fermentum aliquet. Integer at interdum
                      nisi. Vivamus risus erat, facilisis a blandit ut, sollicitudin sed est. Vestibulum volutpat luctus
                      quam sed finibus. Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                    <h3>Jayden Brown</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quisque tristique lectus eget pretium lacinia. Mauris suscipit sapien sit amet enim rhoncus
                      tristique. Phasellus dictum aliquam nisl vel fermentum. Duis viverra luctus justo, vel aliquam ipsum
                      mollis nec. Pellentesque quis suscipit erat. Mauris id lobortis tellus.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Review />
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <Heading>Gallery</Heading>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-1.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-4.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-7.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                  <img src="assets/img/gallery/gallery-8.jpg" alt className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Home;