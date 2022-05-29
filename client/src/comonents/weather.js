import React, { Component } from 'react';
import { Box, Container } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import moment from 'moment';
import { Button, Typography } from 'antd';
// /css
import '../css/Weather.css';
import { Link } from 'react-router-dom';

const { Title } = Typography;
export class Whetar extends Component {
  constructor() {
    super();
    this.state = { data: [], current: [] };
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

      this.setState({ data: result, current: result.current });

      console.log('result', result);
    });
  }

  render() {
    const { temp, dt, sunrise, sunset } = this.state.current;
    const { timezone } = this.state.data;

    return (
      <>
        <Container className="main_container">
          <Box className="main_div">
            <Box className="main_div_2">
              <Box className="main_icon">
                <LightModeRoundedIcon className="icon" />
              </Box>
              <Box>
                <Title level={4}>{moment(dt * 1000).format('dddd')} </Title>
                <Title level={4}>{timezone} </Title>
                <Title level={5}>Temp : {temp}°</Title>
                <Title level={5}>
                  Sunrise : {moment(sunrise * 1000).format('LT')}
                </Title>
                <Title level={5}>
                  SunSet : {moment(sunset * 1000).format('LT')}
                </Title>
              </Box>

              <Button
                style={{ position: 'absolute', bottom: '5px' }}
                type="primary"
              >
                <Link to="days">next</Link>
              </Button>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default Whetar;
