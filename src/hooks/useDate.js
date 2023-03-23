import { useSelector } from 'react-redux';

export default function useDate() {
  return useSelector((state) => state.calendar.date);
}
