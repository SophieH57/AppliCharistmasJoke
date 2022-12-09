import {useState} from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

export default function useCountDownDays(fromDate) {
  const [days, setDays] = useState(0);

  const getCountDownTime = () => {
    const today = dayjs.utc().local().format();
    setDays(dayjs(fromDate).diff(today, 'day'));
  };

  useState(() => {
    getCountDownTime();
  });
  return {days};
}
