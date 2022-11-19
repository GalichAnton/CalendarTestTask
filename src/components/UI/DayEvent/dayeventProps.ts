import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { IEvent } from '../../../interfaces/event';

export interface IDayEventProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  dayEvent: IEvent;
  isPast?: boolean;
  onEventClick?: (event: IEvent) => void;
}
