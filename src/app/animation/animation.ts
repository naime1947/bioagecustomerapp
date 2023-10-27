import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = [
  trigger('fadeIn', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate(1500, style({ opacity: 1 })),
    ]),
  ]),
];

export const slideFromRight = [
  trigger('slideFormRight', [
    transition(':enter', [
      style({
        transform: 'translateX(100%)',
        opacity: 0,
      }),
      animate(1000),
    ]),
  ]),
];
export const slideFormLeft = [
  trigger('slideFormLeft', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)',
        opacity: 0,
      }),
      animate(1000),
    ]),
  ]),
];
