import { Col, Row } from 'antd';
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { BurnInfo } from './style';

const Burn = () => {

  const [countDownTime, setCountDownTime] = useState(0);
  useEffect(() => {
    const hongKongTime = moment().tz('Asia/Hong_Kong');
    const endOfDay = moment().tz('Asia/Hong_Kong').endOf('day');
    let diff = endOfDay.diff(hongKongTime, 'seconds');
    if (diff > 0) {
      setInterval(() => {
        diff = diff - 1;
        setCountDownTime(diff);
      }, 1000);
    }
  }, []);

  return (
    <Row>
      <Col xs={24}>
        <BurnInfo>
          <QRCode value="0x0000000000000000000000000000000000000000" size={200} />
          <div className="burn-information">
            <p>Burn your T-Tokens By Sending Them To This Address & Receive Back Locked Crypto</p>
            <p>0x0000000000000000000000000000000000000000</p>
          </div>
          <div className="burn-countdown">
            <p>next payout in</p>
            <h1>{moment()
              .seconds(countDownTime)
              .format('H:mm:ss')}</h1>
          </div>
        </BurnInfo>
      </Col>
    </Row>
  );
}

export default Burn;
