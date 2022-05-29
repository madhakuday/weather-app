import { Box, Container } from '@mui/material';
import React, { Component } from 'react';
import { Card, Col, Grid, Row, Typography } from 'antd';
import moment from 'moment';
import '../css/days.css';

//
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/style.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

//
const { Title } = Typography;

export class Lastday extends Component {
  constructor(props) {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getCurrentPosition();
  }
  getCurrentPosition() {
    const api_key = '078a8f9993f55a36e7bcb3868c2a5062';
    navigator.geolocation.getCurrentPosition(async (suc) => {
      const { latitude, longitude } = suc.coords;
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${api_key}`;

      const res = await fetch(api);
      const result = await res.json();

      this.setState({ data: result.daily });

      console.log('result', this.state.data);
    });
    // console.log('uni val is ', unique);c
  }
  render() {
    return (
      <>
        <div className="container_background_day">
          <Container className="day_main">
            <Box className="day_main_2">
              <div className="swiper_div_1">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  navigation={true}
                >
                  {this.state.data.map((w, ind) => {
                    return (
                      <React.Fragment key={ind}>
                        {/* <Col md={8} sm={9}> */}
                        <SwiperSlide>
                          <Card
                            className="div_main_card"
                            style={{
                              width: 200,
                              borderRadius: '5px',
                              margin: '0 10px',
                            }}
                          >
                            <Title level={5}>
                              {moment(w.dt * 1000).format('dddd')}
                            </Title>
                            <Title level={5}>Temp : {w.temp.day}</Title>
                            <Title level={5}>
                              Sunrice: {moment(w.sunrise * 1000).format('LT')}
                            </Title>
                            <Title level={5}>
                              Sunset : {moment(w.sunset).format('LT')}
                            </Title>
                          </Card>
                        </SwiperSlide>

                        {/* </Col> */}
                      </React.Fragment>
                    );
                  })}
                </Swiper>
              </div>
              <div className="swiper_div_2">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  navigation={true}
                >
                  {this.state.data.map((w, ind) => {
                    if (ind === 0) {
                      console.log('w is ', moment(w.id).format('dddd'));
                    } else {
                      return (
                        <React.Fragment key={ind}>
                          {/* <Col md={8} sm={9}> */}
                          <SwiperSlide>
                            <Card
                              className="div_main_card"
                              style={{
                                width: 200,
                                borderRadius: '5px',
                                margin: '0 10px',
                              }}
                            >
                              <Title level={5}>
                                {moment(w.dt * 1000).format('dddd')}
                              </Title>
                              <Title level={5}>Temp : {w.temp.day}</Title>
                              <Title level={5}>
                                Sunrice: {moment(w.sunrise * 1000).format('LT')}
                              </Title>
                              <Title level={5}>
                                Sunset : {moment(w.sunset).format('LT')}
                              </Title>
                            </Card>
                          </SwiperSlide>

                          {/* </Col> */}
                        </React.Fragment>
                      );
                    }
                  })}
                </Swiper>
              </div>
            </Box>
          </Container>
        </div>
      </>
    );
  }
}

export default Lastday;

//  c //

//   return (
// <>
//   <Swiper
//     slidesPerView={4}
//     spaceBetween={30}
//     centeredSlides={true}
//     pagination={{
//       clickable: true,
//     }}
//     modules={[Pagination]}
//     className="mySwiper"
//   >
//     <SwiperSlide>Slide 1</SwiperSlide>
//     <SwiperSlide>Slide 2</SwiperSlide>
//     <SwiperSlide>Slide 3</SwiperSlide>
//     <SwiperSlide>Slide 4</SwiperSlide>
//     <SwiperSlide>Slide 5</SwiperSlide>
//     <SwiperSlide>Slide 6</SwiperSlide>
//     <SwiperSlide>Slide 7</SwiperSlide>
//     <SwiperSlide>Slide 8</SwiperSlide>
//     <SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
// </>
