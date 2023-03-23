import { styled } from '@stitches/react';

export const MainWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  top: 51,
  width: 266,
  height: 332,
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: '0px 4px 16px rgba(165,163,174,0.45)',
  fontFamily: 'Public Sans, sans-serif',
});

export const CalendarDayCell = styled('div', {
  height: 34,
  width: 34,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 40,
  fontSize: 15,
  cursor: 'pointer',

  variants: {
    variant: {
      default: {
        color: '#908E9C',
      },
      today: {
        color: '#28C76F',
        backgroundColor: '#28C76F29',
      },
      nextMonth: {
        color: '#CAC5DB',
      },
    },
  },
});
