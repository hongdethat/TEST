import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './timeout.css';


function Timeout() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment('2022-10-15 12:12:12', 'YYYY-MM-DD hh:mm:ss');
      const countdown = moment(then - now);
      setDays(countdown.format('D'));
      setHours(countdown.format('HH'));
      setMinutes(countdown.format('mm'));
      setSeconds(countdown.format('ss'));
    }, 1000);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="TimeoutFlex">
        <div className="xxxxxxp">
          <span className="TimeoutFlexSpan">{days}</span>
          <span> {t('Ngày')} </span>
        </div>
        {showSemicolon ? <div className="xxxxxxp">:</div> : null}
        <div className="xxxxxxp">
          <span className="TimeoutFlexSpan">{hours}</span>
          <span> {t('Giờ')} </span>
        </div>
        {showSemicolon ? <div className="xxxxxxp">:</div> : null}
        <div className="xxxxxxp">
          <span className="TimeoutFlexSpan">{minutes}</span>
          <span> {t('phút')} </span>
        </div>
        {showSemicolon ? <div className="xxxxxxp">:</div> : null}
        <div className="xxxxxxp">
          <span className="TimeoutFlexSpan">{seconds}</span>
          <span> {t('Giây')}</span>
        </div>
    </div>
  );
}

export default Timeout;
