
import { TimelineMonth, Memory } from './types';

export const TIMELINE_DATA: TimelineMonth[] = [
  {
    id: 'jan',
    monthName: 'JANUARY',
    title: 'Where It All Began',
    caption: 'Cold mornings and warm coffee. That first look that changed everything.',
    color: 'from-blue-900/20 to-slate-900',
    accent: '❄️'
  },
  {
    id: 'apr',
    monthName: 'APRIL',
    title: 'Blossoming Days',
    caption: 'Spring rains brought us closer under a single shared umbrella.',
    color: 'from-emerald-900/20 to-slate-900',
    accent: '🌸'
  },
  {
    id: 'jul',
    monthName: 'JULY',
    title: 'The Golden Hour',
    caption: 'Endless sunsets by the water. The world felt like it belonged only to us.',
    color: 'from-amber-900/20 to-slate-900',
    accent: '☀️'
  },
  {
    id: 'oct',
    monthName: 'OCTOBER',
    title: 'Autumn Whispers',
    caption: 'Crisp air and the sound of falling leaves. Quiet nights in your arms.',
    color: 'from-orange-900/20 to-slate-900',
    accent: '🍂'
  }
];

export const MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'The First Date',
    description: 'We talked for hours until the restaurant closed.',
    image: 'https://picsum.photos/seed/love1/600/800'
  },
  {
    id: '2',
    title: 'Rainy Tuesday',
    description: 'Dancing in the kitchen to no music at all.',
    image: 'https://picsum.photos/seed/love2/600/800'
  },
  {
    id: '3',
    title: 'The Road Trip',
    description: 'Six hours of singing badly to the radio.',
    image: 'https://picsum.photos/seed/love3/600/800'
  },
  {
    id: '4',
    title: 'A Quiet Moment',
    description: 'Just you, me, and the city lights.',
    image: 'https://picsum.photos/seed/love4/600/800'
  }
];
