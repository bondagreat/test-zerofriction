import '@fontsource/public-sans';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';

import * as Styles from '../../styles';
import { LeftPath, RightPath } from '../../icons';
import { useDispatch } from 'react-redux';
import { selectDate } from '../../redux/calendarSlice';
import useDate from '../../hooks/useDate';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const dispatch = useDispatch();
  const date = useDate();

  const currentDay = useMemo(() => dayjs().toDate(), []);

  const firstDayOfTheMonth = useMemo(
    () => selectedDate.clone().startOf('month'),
    [selectedDate]
  );

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf('week'),
    [firstDayOfTheMonth]
  );

  const generateFirstDayOfEachWeek = (day) => {
    const dates = [day];
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, 'week');
      dates.push(date);
    }
    return dates;
  };

  const generateWeek = (day) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, 'day').toDate();
      dates.push(date);
    }
    return dates;
  };

  const generateWeeksOfTheMonth = useMemo(() => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
      firstDayOfFirstWeekOfMonth
    );
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

  const handleSelectDate = (date) => {
    if (date) {
      const newDate = date.toString();
      dispatch(selectDate(newDate));
    }
  };

  return (
    // <>
    <Styles.MainWrapper>
      <div className="flex items-center justify-between h-[58px] px-4">
        <p className="text-[#5C5871] font-semibold text-[15px]">
          {selectedDate.clone().format('MMMM YYYY')}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedDate((date) => date.subtract(1, 'month'))}
            className="h-7 w-7 bg-[#4B465C14] rounded-full flex items-center justify-center"
          >
            <LeftPath />
          </button>
          <button
            onClick={() => setSelectedDate((date) => date.add(1, 'month'))}
            className="h-7 w-7 bg-[#4B465C14] rounded-full flex items-center justify-center"
          >
            <RightPath />
          </button>
        </div>
      </div>
      <hr className="bg-[#DBDADE]" />
      <div className="flex justify-between px-[14px] py-3">
        {generateWeeksOfTheMonth[0].map((day, index) => (
          <div
            className="text-[13px] font-semibold h-[34px] w-[34px] flex items-center justify-center text-[#5C5871]"
            key={`week-day-${index}`}
          >
            {dayjs(day).format('ddd')}
          </div>
        ))}
      </div>
      {generateWeeksOfTheMonth.map((week, weekIndex) => (
        <div className="flex px-[14px]" key={`week-${weekIndex}`}>
          {week.map((day, dayIndex) => {
            const isSelected = Boolean(day.toString() === date);
            return (
              <Styles.CalendarDayCell
                className={`hover:bg-[#4B465C14] hover:text-[#908E9C] ${
                  isSelected ? '!text-[#231F20] !bg-[#DEE34B]' : ''
                }`}
                onClick={() => handleSelectDate(day)}
                key={`day-${dayIndex}`}
                variant={
                  selectedDate.clone().toDate().getMonth() !== day.getMonth()
                    ? 'nextMonth'
                    : dayjs(currentDay).isSame(day, 'date')
                    ? 'today'
                    : 'default'
                }
              >
                {day.getDate()}
              </Styles.CalendarDayCell>
            );
          })}
        </div>
      ))}
    </Styles.MainWrapper>
    // </>
  );
}
